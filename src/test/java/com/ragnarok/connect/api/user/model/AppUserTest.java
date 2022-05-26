package com.ragnarok.connect.api.user.model;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.configurations.security.authorities.Authority;

import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.Disabled;

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

    /**
     * Method under test: {@link AppUser#AppUser(String, String, String, String)}
     */
    @Test
    void testConstructor2() {
        AppUser actualAppUser = new AppUser("Jane", "Doe", "jane.doe@example.org", "iloveyou");

        assertNull(actualAppUser.getAge());
        assertTrue(actualAppUser.getAuthorities().isEmpty());
        assertNull(actualAppUser.getCity());
        assertTrue(actualAppUser.getInterests().isEmpty());
        assertNull(actualAppUser.getCountry());
        assertEquals("Doe", actualAppUser.getLastname());
        assertEquals("iloveyou", actualAppUser.getPassword());
        assertEquals("", actualAppUser.getBiography());
        assertEquals("Jane", actualAppUser.getFirstname());
        assertNull(actualAppUser.getState());
        assertTrue(actualAppUser.getFriendList().isEmpty());
        assertEquals("jane.doe@example.org", actualAppUser.getUsername());
    }

    /**
     * Method under test: {@link AppUser#AppUser(String, String, String, String, Integer, String, String, String)}
     */
    @Test
    void testConstructor3() {
        AppUser actualAppUser = new AppUser("Jane", "Doe", "jane.doe@example.org", "iloveyou", 1, "GB", "MD", "Oxford");

        assertEquals(1, actualAppUser.getAge().intValue());
        assertTrue(actualAppUser.getAuthorities().isEmpty());
        assertEquals("MD", actualAppUser.getCity());
        assertTrue(actualAppUser.getInterests().isEmpty());
        assertEquals("GB", actualAppUser.getCountry());
        assertEquals("Doe", actualAppUser.getLastname());
        assertEquals("iloveyou", actualAppUser.getPassword());
        assertEquals("", actualAppUser.getBiography());
        assertEquals("Jane", actualAppUser.getFirstname());
        assertEquals("Oxford", actualAppUser.getState());
        assertTrue(actualAppUser.getFriendList().isEmpty());
        assertEquals("jane.doe@example.org", actualAppUser.getUsername());
    }

    /**
     * Method under test: {@link AppUser#AppUser(String, String, String, String, Integer, String, String, String, String, Set)}
     */
    @Test
    void testConstructor4() {
        AppUser actualAppUser = new AppUser("Jane", "Doe", "jane.doe@example.org", "iloveyou", 1, "GB", "MD", "Oxford",
                "Biography", new HashSet<>());

        assertEquals(1, actualAppUser.getAge().intValue());
        assertTrue(actualAppUser.getAuthorities().isEmpty());
        assertEquals("Oxford", actualAppUser.getCity());
        assertTrue(actualAppUser.getInterests().isEmpty());
        assertEquals("GB", actualAppUser.getCountry());
        assertEquals("Doe", actualAppUser.getLastname());
        assertEquals("iloveyou", actualAppUser.getPassword());
        assertEquals("Biography", actualAppUser.getBiography());
        assertEquals("Jane", actualAppUser.getFirstname());
        assertEquals("MD", actualAppUser.getState());
        assertTrue(actualAppUser.getFriendList().isEmpty());
        assertEquals("jane.doe@example.org", actualAppUser.getUsername());
    }

    /**
     * Method under test: {@link AppUser#AppUser(String, String, String, String, Integer, String, String, String, String, Set, boolean, Set, Set)}
     */
    @Test
    void testConstructor5() {
        HashSet<Interest> interests = new HashSet<>();
        HashSet<String> friendList = new HashSet<>();
        AppUser actualAppUser = new AppUser("Jane", "Doe", "jane.doe@example.org", "iloveyou", 1, "GB", "MD", "Oxford",
                "Biography", interests, true, friendList, new HashSet<>());

        assertEquals(1, actualAppUser.getAge().intValue());
        assertTrue(actualAppUser.getAuthorities().isEmpty());
        assertEquals("Oxford", actualAppUser.getCity());
        assertTrue(actualAppUser.getInterests().isEmpty());
        assertEquals("GB", actualAppUser.getCountry());
        assertEquals("Doe", actualAppUser.getLastname());
        assertEquals("iloveyou", actualAppUser.getPassword());
        assertEquals("Biography", actualAppUser.getBiography());
        assertEquals("Jane", actualAppUser.getFirstname());
        assertEquals("MD", actualAppUser.getState());
        assertTrue(actualAppUser.getFriendList().isEmpty());
        assertEquals("jane.doe@example.org", actualAppUser.getUsername());
    }

    /**
     * Method under test: {@link AppUser#addFriend(String)}
     */
    @Test
    void testAddFriend() {
        AppUser appUser = new AppUser();
        appUser.addFriend("Publicid");
        assertEquals(1, appUser.getFriendList().size());
    }

    /**
     * Method under test: {@link AppUser#addFriend(String)}
     */
    @Test
    void testAddFriend2() {
        AppUser appUser = new AppUser();
        appUser.removeFriend("Publicid");
        appUser.setAge(1);
        appUser.setAuthorities(new HashSet<>());
        appUser.setBiography("Biography");
        appUser.setCity("Oxford");
        appUser.setCountry("GB");
        appUser.setEmail("jane.doe@example.org");
        appUser.setEnabled(true);
        appUser.setFirstname("Jane");
        appUser.setFriendList(new HashSet<>());
        appUser.setId(123L);
        appUser.setInterests(new HashSet<>());
        appUser.setLastname("Doe");
        appUser.setPassword("iloveyou");
        appUser.setPublicid("Publicid");
        appUser.setState("MD");
        appUser.addFriend("foo");
        assertEquals(1, appUser.getFriendList().size());
    }

    /**
     * Method under test: {@link AppUser#removeFriend(String)}
     */
    @Test
    void testRemoveFriend() {
        AppUser appUser = new AppUser();
        appUser.removeFriend("Publicid");
        assertTrue(appUser.getFriendList().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#removeFriend(String)}
     */
    @Test
    void testRemoveFriend2() {
        AppUser appUser = new AppUser("Jane", "Doe", "jane.doe@example.org", "iloveyou");
        appUser.removeFriend("Publicid");
        assertTrue(appUser.getFriendList().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#toReturnable()}
     */
    @Test
    void testToReturnable() {
        AppUserReturnable actualToReturnableResult = (new AppUser()).toReturnable();
        assertNull(actualToReturnableResult.getAge());
        assertNull(actualToReturnableResult.getState());
        assertNull(actualToReturnableResult.getPublic_id());
        assertNull(actualToReturnableResult.getLastname());
        assertTrue(actualToReturnableResult.getInterests().isEmpty());
        assertNull(actualToReturnableResult.getFriendIdList());
        assertNull(actualToReturnableResult.getFirstname());
        assertNull(actualToReturnableResult.getEmail());
        assertNull(actualToReturnableResult.getCountry());
        assertNull(actualToReturnableResult.getCity());
        assertNull(actualToReturnableResult.getBiography());
    }

    /**
     * Method under test: {@link AppUser#toReturnable()}
     */
    @Test
    void testToReturnable2() {
        AppUser appUser = new AppUser();
        appUser.removeFriend("Publicid");
        appUser.setAge(1);
        appUser.setAuthorities(new HashSet<>());
        appUser.setBiography("Biography");
        appUser.setCity("Oxford");
        appUser.setCountry("GB");
        appUser.setEmail("jane.doe@example.org");
        appUser.setEnabled(true);
        appUser.setFirstname("Jane");
        appUser.setFriendList(new HashSet<>());
        appUser.setId(123L);
        appUser.setInterests(new HashSet<>());
        appUser.setLastname("Doe");
        appUser.setPassword("iloveyou");
        appUser.setPublicid("Publicid");
        appUser.setState("MD");
        AppUserReturnable actualToReturnableResult = appUser.toReturnable();
        assertEquals(1, actualToReturnableResult.getAge().intValue());
        assertEquals("MD", actualToReturnableResult.getState());
        assertEquals("Publicid", actualToReturnableResult.getPublic_id());
        assertEquals("Doe", actualToReturnableResult.getLastname());
        assertTrue(actualToReturnableResult.getInterests().isEmpty());
        assertTrue(actualToReturnableResult.getFriendIdList().isEmpty());
        assertEquals("Jane", actualToReturnableResult.getFirstname());
        assertEquals("jane.doe@example.org", actualToReturnableResult.getEmail());
        assertEquals("GB", actualToReturnableResult.getCountry());
        assertEquals("Oxford", actualToReturnableResult.getCity());
        assertEquals("Biography", actualToReturnableResult.getBiography());
    }

    /**
     * Method under test: {@link AppUser#getInterests()}
     */
    @Test
    void testGetInterests() {
        assertTrue((new AppUser()).getInterests().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#getInterests()}
     */
    @Test
    void testGetInterests2() {
        AppUser appUser = new AppUser();
        appUser.removeFriend("Publicid");
        appUser.setAge(1);
        appUser.setAuthorities(new HashSet<>());
        appUser.setBiography("Biography");
        appUser.setCity("Oxford");
        appUser.setCountry("GB");
        appUser.setEmail("jane.doe@example.org");
        appUser.setEnabled(true);
        appUser.setFirstname("Jane");
        appUser.setFriendList(new HashSet<>());
        appUser.setId(123L);
        HashSet<Interest> interestSet = new HashSet<>();
        appUser.setInterests(interestSet);
        appUser.setLastname("Doe");
        appUser.setPassword("iloveyou");
        appUser.setPublicid("Publicid");
        appUser.setState("MD");
        Set<Interest> actualInterests = appUser.getInterests();
        assertSame(interestSet, actualInterests);
        assertTrue(actualInterests.isEmpty());
    }

    /**
     * Method under test: {@link AppUser#getAuthorities()}
     */
    @Test
    void testGetAuthorities() {
        assertTrue((new AppUser()).getAuthorities().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#getAuthorities()}
     */
    @Test
    void testGetAuthorities2() {
        AppUser appUser = new AppUser();
        appUser.removeFriend("Publicid");
        appUser.setAge(1);
        appUser.setAuthorities(new HashSet<>());
        appUser.setBiography("Biography");
        appUser.setCity("Oxford");
        appUser.setCountry("GB");
        appUser.setEmail("jane.doe@example.org");
        appUser.setEnabled(true);
        appUser.setFirstname("Jane");
        appUser.setFriendList(new HashSet<>());
        appUser.setId(123L);
        appUser.setInterests(new HashSet<>());
        appUser.setLastname("Doe");
        appUser.setPassword("iloveyou");
        appUser.setPublicid("Publicid");
        appUser.setState("MD");
        assertTrue(appUser.getAuthorities().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#getAuthorities()}
     */
    @Test
    void testGetAuthorities3() {

        Authority authority = new Authority();
        authority.setName("admin");

        HashSet<Authority> authoritySet = new HashSet<>();
        authoritySet.add(authority);

        AppUser appUser = new AppUser();
        appUser.setAge(1);
        appUser.setAuthorities(authoritySet);
        appUser.setBiography("Biography");
        appUser.setCity("Oxford");
        appUser.setCountry("GB");
        appUser.setEmail("jane.doe@example.org");
        appUser.setEnabled(true);
        appUser.setFirstname("Jane");
        appUser.setFriendList(new HashSet<>());
        appUser.setId(123L);
        appUser.setInterests(new HashSet<>());
        appUser.setLastname("Doe");
        appUser.setPassword("iloveyou");
        appUser.setPublicid("Publicid");
        appUser.setState("MD");

        assertThat(appUser.getAuthorities()).isEqualTo(authoritySet);
    }
}

