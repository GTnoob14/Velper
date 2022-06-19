package com.ragnarok.connect.configurations.security;

import com.ragnarok.connect.api.user.service.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private final AppUserService appUserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors().and()
                .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).ignoringAntMatchers("/login", "/api/v1/user/add", "/api/v1/csc/**", "/api/v1/interests", "/api/v1/user/token", "api/v1/user/token/**").and()
                .httpBasic().disable()
                .formLogin()
                    .loginPage("/login")
                    .successHandler((req, res, auth) -> {})
                    .failureHandler((req, res, auth) -> {})
                .and().logout()
                    .logoutUrl("/logout")
                    .invalidateHttpSession(true)
                    .deleteCookies("remember-me")
                .and().rememberMe().tokenValiditySeconds(30*24*60*60).userDetailsService(appUserService) //30 days (1 Month)
                .and().userDetailsService(appUserService)
                    .authorizeRequests()
                    .mvcMatchers("/login", "/api/v1/csc/**", "/", "/logout").permitAll()
                    .mvcMatchers(HttpMethod.POST, "/api/v1/user/add").permitAll()
                    .mvcMatchers("/api/v1/user/token/**").permitAll()
                    .mvcMatchers(HttpMethod.GET, "/api/v1/interests").permitAll()
                    .mvcMatchers("/api/v1/**").authenticated()
                    .antMatchers("/*", "/**/*.css", "/**/*.css.map", "/**/*.js", "/**/*.js.map", "/**/*.chunk.js", "/**/*.chunk.js.map", "/**/*.js.LICENSE.txt", "/**/*.txt", "/**/*.ico", "/**/*.png", "/**/*.svg", "/**/*.json").permitAll()
                    .anyRequest().authenticated()
                .and().exceptionHandling()
                    .defaultAuthenticationEntryPointFor(new Http403ForbiddenEntryPoint(), new AntPathRequestMatcher("/**"))
        ;
    }


}
