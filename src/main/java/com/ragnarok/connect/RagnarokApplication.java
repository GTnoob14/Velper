package com.ragnarok.connect;

import com.ragnarok.connect.configurations.security.authorities.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@Controller
public class RagnarokApplication {

	@GetMapping(value = "/*")
	public String getReactApp(){
		return "index";
	}

	public static void main(String[] args) {
		SpringApplication.run(RagnarokApplication.class, args);
		System.out.println("FINISHED LOADING:: RagnarokApplication Running");
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("http://localhost:3000", "http://192.168.178.65:3000", "http://localhost:8081", "http://192.168.178.65:8081")
						.allowCredentials(true)
						.allowedMethods("GET", "POST", "PUT", "DELETE");
			}
		};
	}

	@Autowired
	private AuthorityRepository authorityRepository;

	//setup initial data in db
	@EventListener(ApplicationReadyEvent.class)
	public void initializeBasicAuthorities(){
//		Authority user_auth = new Authority("USER");
//		Authority premium_auth = new Authority("PREMIUM");
//
//		authorityRepository.save(user_auth);
//		authorityRepository.save(premium_auth);
	}


}
