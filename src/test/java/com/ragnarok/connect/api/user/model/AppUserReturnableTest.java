package com.ragnarok.connect.api.user.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

class AppUserReturnableTest {
    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link AppUserReturnable#AppUserReturnable()}
     *   <li>{@link AppUserReturnable#setAge(Integer)}
     *   <li>{@link AppUserReturnable#setBiography(String)}
     *   <li>{@link AppUserReturnable#setCity(String)}
     *   <li>{@link AppUserReturnable#setCountry(String)}
     *   <li>{@link AppUserReturnable#setEmail(String)}
     *   <li>{@link AppUserReturnable#setFirstname(String)}
     *   <li>{@link AppUserReturnable#setFriendIdList(List)}
     *   <li>{@link AppUserReturnable#setInterests(List)}
     *   <li>{@link AppUserReturnable#setLastname(String)}
     *   <li>{@link AppUserReturnable#setPublic_id(String)}
     * </ul>
     */
    @Test
    void testConstructor() {
        AppUserReturnable actualAppUserReturnable = new AppUserReturnable();
        actualAppUserReturnable.setAge(1);
        actualAppUserReturnable.setBiography("Biography");
        actualAppUserReturnable.setCity("Oxford");
        actualAppUserReturnable.setCountry("GB");
        actualAppUserReturnable.setEmail("jane.doe@example.org");
        actualAppUserReturnable.setFirstname("Jane");
        ArrayList<String> stringList = new ArrayList<>();
        actualAppUserReturnable.setFriendIdList(stringList);
        ArrayList<String> stringList1 = new ArrayList<>();
        actualAppUserReturnable.setInterests(stringList1);
        actualAppUserReturnable.setLastname("Doe");
        actualAppUserReturnable.setPublic_id("Public id");
        assertEquals(1, actualAppUserReturnable.getAge().intValue());
        assertEquals("Biography", actualAppUserReturnable.getBiography());
        assertEquals("Oxford", actualAppUserReturnable.getCity());
        assertEquals("GB", actualAppUserReturnable.getCountry());
        assertEquals("jane.doe@example.org", actualAppUserReturnable.getEmail());
        assertEquals("Jane", actualAppUserReturnable.getFirstname());
        List<String> friendIdList = actualAppUserReturnable.getFriendIdList();
        assertSame(stringList, friendIdList);
        List<String> interests = actualAppUserReturnable.getInterests();
        assertEquals(interests, friendIdList);
        assertSame(stringList1, interests);
        assertEquals(stringList, interests);
        assertEquals("Doe", actualAppUserReturnable.getLastname());
        assertEquals("Public id", actualAppUserReturnable.getPublic_id());
    }

    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link AppUserReturnable#AppUserReturnable(String, String, String, String, Integer, String, String, String, List, List)}
     *   <li>{@link AppUserReturnable#setAge(Integer)}
     *   <li>{@link AppUserReturnable#setBiography(String)}
     *   <li>{@link AppUserReturnable#setCity(String)}
     *   <li>{@link AppUserReturnable#setCountry(String)}
     *   <li>{@link AppUserReturnable#setEmail(String)}
     *   <li>{@link AppUserReturnable#setFirstname(String)}
     *   <li>{@link AppUserReturnable#setFriendIdList(List)}
     *   <li>{@link AppUserReturnable#setInterests(List)}
     *   <li>{@link AppUserReturnable#setLastname(String)}
     *   <li>{@link AppUserReturnable#setPublic_id(String)}
     * </ul>
     */
    @Test
    void testConstructor2() {
        ArrayList<String> stringList = new ArrayList<>();
        ArrayList<String> stringList1 = new ArrayList<>();
        AppUserReturnable actualAppUserReturnable = new AppUserReturnable("Public id", "Jane", "Doe",
                "jane.doe@example.org", 1, "GB", "Oxford", "Biography", stringList, stringList1);
        actualAppUserReturnable.setAge(1);
        actualAppUserReturnable.setBiography("Biography");
        actualAppUserReturnable.setCity("Oxford");
        actualAppUserReturnable.setCountry("GB");
        actualAppUserReturnable.setEmail("jane.doe@example.org");
        actualAppUserReturnable.setFirstname("Jane");
        ArrayList<String> stringList2 = new ArrayList<>();
        actualAppUserReturnable.setFriendIdList(stringList2);
        ArrayList<String> stringList3 = new ArrayList<>();
        actualAppUserReturnable.setInterests(stringList3);
        actualAppUserReturnable.setLastname("Doe");
        actualAppUserReturnable.setPublic_id("Public id");
        assertEquals(1, actualAppUserReturnable.getAge().intValue());
        assertEquals("Biography", actualAppUserReturnable.getBiography());
        assertEquals("Oxford", actualAppUserReturnable.getCity());
        assertEquals("GB", actualAppUserReturnable.getCountry());
        assertEquals("jane.doe@example.org", actualAppUserReturnable.getEmail());
        assertEquals("Jane", actualAppUserReturnable.getFirstname());
        List<String> friendIdList = actualAppUserReturnable.getFriendIdList();
        assertSame(stringList2, friendIdList);
        assertEquals(stringList, friendIdList);
        assertEquals(stringList1, friendIdList);
        List<String> interests = actualAppUserReturnable.getInterests();
        assertEquals(interests, friendIdList);
        assertSame(stringList3, interests);
        assertEquals(stringList, interests);
        assertEquals(stringList1, interests);
        assertEquals(stringList2, interests);
        assertEquals("Doe", actualAppUserReturnable.getLastname());
        assertEquals("Public id", actualAppUserReturnable.getPublic_id());
    }
}

