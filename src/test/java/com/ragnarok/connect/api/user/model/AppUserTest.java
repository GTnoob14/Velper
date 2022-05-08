package com.ragnarok.connect.api.user.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class AppUserTest {
    /**
     * Method under test: {@link AppUser#AppUser(String, String, String, String)}
     */
    @Test
    void testConstructor() {
        AppUser actualAppUser = new AppUser("Jane", "Doe", "jane.doe@example.org", "iloveyou");

        assertEquals("iloveyou", actualAppUser.getPassword());
        assertEquals("jane.doe@example.org", actualAppUser.getUsername());
        assertTrue(actualAppUser.isAccountNonExpired());
        assertTrue(actualAppUser.isAccountNonLocked());
        assertTrue(actualAppUser.isCredentialsNonExpired());
        assertTrue(actualAppUser.isEnabled());
    }
}

