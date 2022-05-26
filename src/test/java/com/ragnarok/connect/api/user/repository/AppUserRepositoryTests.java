package com.ragnarok.connect.api.user.repository;

import com.ragnarok.connect.api.user.model.AppUser;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class AppUserRepositoryTests {

    @Autowired
    private AppUserRepository appUserRepository;

    @Test
    public void findByEmailTest(){
        //given
        final String email = "bob@gmail.com";
        AppUser appUser = new AppUser(
                "Bob", "Johnson", email, "bobby123", 35, "USA", "California", "San Francisco", "Bob is here", null, true, null, null
        );

        //when
        appUserRepository.save(appUser);
        final Optional<AppUser> actualUser = appUserRepository.findByEmail(email);

        //then
        assertThat(actualUser).isNotEmpty();
        assertThat(actualUser.get()).isEqualTo(appUser);
    }


    @Test
    public void findByPublicidTest(){
        //given
        final String publicid = "sdk9-sme8-20ke-8dh3";
        AppUser appUser = new AppUser(
                "Bob", "Johnson", "bob@gmail.com", "bobby123", 35, "USA", "California", "San Francisco", "Bob is here", null, true, null, null
        );
        appUser.setPublicid(publicid);

        //when
        appUserRepository.save(appUser);
        final Optional<AppUser> actualUser = appUserRepository.findByPublicid(publicid);

        //then
        assertThat(actualUser).isNotEmpty();
        assertThat(actualUser.get()).isEqualTo(appUser);
    }
}
