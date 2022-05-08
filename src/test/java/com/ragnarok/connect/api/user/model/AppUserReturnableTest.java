package com.ragnarok.connect.api.user.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

class AppUserReturnableTest {
    /**
     * Method under test: {@link AppUserReturnable#canEqual(Object)}
     */
    @Test
    void testCanEqual() {
        assertFalse((new AppUserReturnable()).canEqual("Other"));
    }

    /**
     * Method under test: {@link AppUserReturnable#canEqual(Object)}
     */
    @Test
    void testCanEqual2() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        assertTrue(appUserReturnable.canEqual(new AppUserReturnable()));
    }

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

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals() {
        assertNotEquals(new AppUserReturnable(), null);
        assertNotEquals(new AppUserReturnable(), "Different type to AppUserReturnable");
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals2() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        assertEquals(appUserReturnable, appUserReturnable);
        int expectedHashCodeResult = appUserReturnable.hashCode();
        assertEquals(expectedHashCodeResult, appUserReturnable.hashCode());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals3() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        assertEquals(appUserReturnable, appUserReturnable1);
        int expectedHashCodeResult = appUserReturnable.hashCode();
        assertEquals(expectedHashCodeResult, appUserReturnable1.hashCode());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals4() {
        ArrayList<String> interests = new ArrayList<>();
        AppUserReturnable appUserReturnable = new AppUserReturnable("Public id", "Jane", "Doe", "jane.doe@example.org", 1,
                "GB", "Oxford", "Biography", interests, new ArrayList<>());
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals5() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        ArrayList<String> interests = new ArrayList<>();
        assertNotEquals(appUserReturnable, new AppUserReturnable("Public id", "Jane", "Doe", "jane.doe@example.org", 1,
                "GB", "Oxford", "Biography", interests, new ArrayList<>()));
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals6() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setPublic_id("Public id");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals7() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setFirstname("Jane");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals8() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setLastname("Doe");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals9() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setEmail("jane.doe@example.org");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals10() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setCountry("GB");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals11() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setCity("Oxford");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals12() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setBiography("Biography");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals13() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setInterests(new ArrayList<>());
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals14() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setFriendIdList(new ArrayList<>());
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals15() {
        ArrayList<String> interests = new ArrayList<>();
        AppUserReturnable appUserReturnable = new AppUserReturnable("Public id", "Jane", "Doe", "jane.doe@example.org", 1,
                "GB", "Oxford", "Biography", interests, new ArrayList<>());
        ArrayList<String> interests1 = new ArrayList<>();
        AppUserReturnable appUserReturnable1 = new AppUserReturnable("Public id", "Jane", "Doe", "jane.doe@example.org", 1,
                "GB", "Oxford", "Biography", interests1, new ArrayList<>());

        assertEquals(appUserReturnable, appUserReturnable1);
        int expectedHashCodeResult = appUserReturnable.hashCode();
        assertEquals(expectedHashCodeResult, appUserReturnable1.hashCode());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals16() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setPublic_id("Public id");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals17() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setFirstname("Jane");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals18() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setLastname("Doe");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals19() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setEmail("jane.doe@example.org");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals20() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setCountry("GB");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals21() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setCity("Oxford");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals22() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setBiography("Biography");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals23() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setInterests(new ArrayList<>());
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals24() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setFriendIdList(new ArrayList<>());
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }
}

