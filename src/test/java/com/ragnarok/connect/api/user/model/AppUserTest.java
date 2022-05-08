package com.ragnarok.connect.api.user.model;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.configurations.security.authorities.Authority;

import java.util.ArrayList;

import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Disabled;

import org.junit.jupiter.api.Test;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

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
        assertEquals("jane.doe@example.org", actualAppUser.getUsername());
        assertEquals("iloveyou", actualAppUser.getPassword());
        assertEquals("Doe", actualAppUser.getLastname());
        List<Interest> interests = actualAppUser.getInterests();
        assertTrue(interests.isEmpty());
        assertEquals(interests, actualAppUser.getFriendList());
        assertEquals("Jane", actualAppUser.getFirstname());
        assertNull(actualAppUser.getCountry());
        assertNull(actualAppUser.getCity());
        assertEquals("", actualAppUser.getBiography());
        assertTrue(actualAppUser.getAuthorities().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#AppUser(String, String, String, String, Integer, String, String)}
     */
    @Test
    void testConstructor3() {
        AppUser actualAppUser = new AppUser("Jane", "Doe", "jane.doe@example.org", "iloveyou", 1, "GB", "Oxford");

        assertEquals(1, actualAppUser.getAge().intValue());
        assertEquals("jane.doe@example.org", actualAppUser.getUsername());
        assertEquals("iloveyou", actualAppUser.getPassword());
        assertEquals("Doe", actualAppUser.getLastname());
        List<Interest> interests = actualAppUser.getInterests();
        assertTrue(interests.isEmpty());
        assertEquals(interests, actualAppUser.getFriendList());
        assertEquals("Jane", actualAppUser.getFirstname());
        assertEquals("GB", actualAppUser.getCountry());
        assertEquals("Oxford", actualAppUser.getCity());
        assertEquals("", actualAppUser.getBiography());
        assertTrue(actualAppUser.getAuthorities().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#AppUser(String, String, String, String, Integer, String, String, String, List)}
     */
    @Test
    void testConstructor4() {
        AppUser actualAppUser = new AppUser("Jane", "Doe", "jane.doe@example.org", "iloveyou", 1, "GB", "Oxford",
                "Biography", new ArrayList<>());

        assertEquals(1, actualAppUser.getAge().intValue());
        assertEquals("jane.doe@example.org", actualAppUser.getUsername());
        assertEquals("iloveyou", actualAppUser.getPassword());
        assertEquals("Doe", actualAppUser.getLastname());
        List<Interest> interests = actualAppUser.getInterests();
        assertTrue(interests.isEmpty());
        assertEquals(interests, actualAppUser.getFriendList());
        assertEquals("Jane", actualAppUser.getFirstname());
        assertEquals("GB", actualAppUser.getCountry());
        assertEquals("Oxford", actualAppUser.getCity());
        assertEquals("Biography", actualAppUser.getBiography());
        assertTrue(actualAppUser.getAuthorities().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#AppUser(String, String, String, String, Integer, String, String, String, List, boolean, List, List)}
     */
    @Test
    void testConstructor5() {
        ArrayList<Interest> interests = new ArrayList<>();
        ArrayList<String> stringList = new ArrayList<>();
        ArrayList<Authority> authorityList = new ArrayList<>();
        AppUser actualAppUser = new AppUser("Jane", "Doe", "jane.doe@example.org", "iloveyou", 1, "GB", "Oxford",
                "Biography", interests, true, stringList, authorityList);

        assertEquals(1, actualAppUser.getAge().intValue());
        assertEquals("jane.doe@example.org", actualAppUser.getUsername());
        assertEquals("iloveyou", actualAppUser.getPassword());
        assertEquals("Doe", actualAppUser.getLastname());
        assertEquals(stringList, actualAppUser.getInterests());
        assertEquals(authorityList, actualAppUser.getFriendList());
        assertEquals("Jane", actualAppUser.getFirstname());
        assertEquals("GB", actualAppUser.getCountry());
        assertEquals("Oxford", actualAppUser.getCity());
        assertEquals("Biography", actualAppUser.getBiography());
        assertTrue(actualAppUser.getAuthorities().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#addFriend(String)}
     */
    @Test
    void testAddFriend() {
        AppUser appUser = new AppUser();
        appUser.addFriend("Publicid");
        List<String> friendList = appUser.getFriendList();
        assertEquals(1, friendList.size());
        assertEquals("Publicid", friendList.get(0));
    }

    /**
     * Method under test: {@link AppUser#addFriend(String)}
     */
    @Test
    void testAddFriend2() {
        AppUser appUser = new AppUser();
        appUser.removeFriend("Publicid");
        appUser.setAge(1);
        appUser.setAuthorities(new ArrayList<>());
        appUser.setBiography("Biography");
        appUser.setCity("Oxford");
        appUser.setCountry("GB");
        appUser.setEmail("jane.doe@example.org");
        appUser.setEnabled(true);
        appUser.setFirstname("Jane");
        appUser.setFriendList(new ArrayList<>());
        appUser.setId(123L);
        appUser.setInterests(new ArrayList<>());
        appUser.setLastname("Doe");
        appUser.setPassword("iloveyou");
        appUser.setPublicid("Publicid");
        appUser.addFriend("foo");
        List<String> friendList = appUser.getFriendList();
        assertEquals(1, friendList.size());
        assertEquals("foo", friendList.get(0));
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
        AppUser user = new AppUser(
                "Jane", "Doe", "jane.doe@example.org", "iloveyou", 1, "GB", "Oxford", "Biography", new ArrayList<>()
        );

        AppUserReturnable actualReturnable = new AppUserReturnable(user.getPublicid(), "Jane", "Doe", "jane.doe@example.org", 1, "GB", "Oxford", "Biography", new ArrayList<>(), new ArrayList<>());

        assertThat(user.toReturnable()).isEqualTo(actualReturnable);
    }

    /**
     * Method under test: {@link AppUser#toReturnable()}
     */
    @Test
    void testToReturnable2() {
        AppUser appUser = new AppUser();
        appUser.removeFriend("Publicid");
        appUser.setAge(1);
        ArrayList<Authority> authorityList = new ArrayList<>();
        appUser.setAuthorities(authorityList);
        appUser.setBiography("Biography");
        appUser.setCity("Oxford");
        appUser.setCountry("GB");
        appUser.setEmail("jane.doe@example.org");
        appUser.setEnabled(true);
        appUser.setFirstname("Jane");
        appUser.setFriendList(new ArrayList<>());
        appUser.setId(123L);
        appUser.setInterests(new ArrayList<>());
        appUser.setLastname("Doe");
        appUser.setPassword("iloveyou");
        appUser.setPublicid("Publicid");
        AppUserReturnable actualToReturnableResult = appUser.toReturnable();
        assertEquals(1, actualToReturnableResult.getAge().intValue());
        assertEquals("Publicid", actualToReturnableResult.getPublic_id());
        assertEquals("Doe", actualToReturnableResult.getLastname());
        assertEquals(authorityList, actualToReturnableResult.getInterests());
        assertEquals(authorityList, actualToReturnableResult.getFriendIdList());
        assertEquals("Jane", actualToReturnableResult.getFirstname());
        assertEquals("jane.doe@example.org", actualToReturnableResult.getEmail());
        assertEquals("GB", actualToReturnableResult.getCountry());
        assertEquals("Oxford", actualToReturnableResult.getCity());
        assertEquals("Biography", actualToReturnableResult.getBiography());
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
        appUser.setAuthorities(new ArrayList<>());
        appUser.setBiography("Biography");
        appUser.setCity("Oxford");
        appUser.setCountry("GB");
        appUser.setEmail("jane.doe@example.org");
        appUser.setEnabled(true);
        appUser.setFirstname("Jane");
        appUser.setFriendList(new ArrayList<>());
        appUser.setId(123L);
        appUser.setInterests(new ArrayList<>());
        appUser.setLastname("Doe");
        appUser.setPassword("iloveyou");
        appUser.setPublicid("Publicid");
        assertTrue(appUser.getAuthorities().isEmpty());
    }

    /**
     * Method under test: {@link AppUser#getAuthorities()}
     */
    @Test
    void testGetAuthorities3() {
        Authority authority = new Authority();
        authority.setName("Authority");

        ArrayList<Authority> authorityList = new ArrayList<>();
        authorityList.add(authority);

        AppUser user = new AppUser(
                "Jane", "Doe", "jane.doe@example.org", "iloveyou", 1, "GB", "Oxford", "Biography", new ArrayList<>(), false, new ArrayList<>(), authorityList
        );

        SimpleGrantedAuthority auth = new SimpleGrantedAuthority("Authority");

        assertThat(user.getAuthorities().stream().collect(Collectors.toList())).isEqualTo(List.of(auth));
    }
}

