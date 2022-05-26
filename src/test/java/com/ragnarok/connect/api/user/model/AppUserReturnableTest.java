package com.ragnarok.connect.api.user.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.ragnarok.connect.api.interests.model.Interest;

import java.util.HashSet;
import java.util.Set;

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
     *   <li>{@link AppUserReturnable#setFriendIdList(Set)}
     *   <li>{@link AppUserReturnable#setInterests(Set)}
     *   <li>{@link AppUserReturnable#setLastname(String)}
     *   <li>{@link AppUserReturnable#setPublic_id(String)}
     *   <li>{@link AppUserReturnable#setState(String)}
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
        HashSet<String> stringSet = new HashSet<>();
        actualAppUserReturnable.setFriendIdList(stringSet);
        HashSet<Interest> interestSet = new HashSet<>();
        actualAppUserReturnable.setInterests(interestSet);
        actualAppUserReturnable.setLastname("Doe");
        actualAppUserReturnable.setPublic_id("Public id");
        actualAppUserReturnable.setState("MD");
        assertEquals(1, actualAppUserReturnable.getAge().intValue());
        assertEquals("Biography", actualAppUserReturnable.getBiography());
        assertEquals("Oxford", actualAppUserReturnable.getCity());
        assertEquals("GB", actualAppUserReturnable.getCountry());
        assertEquals("jane.doe@example.org", actualAppUserReturnable.getEmail());
        assertEquals("Jane", actualAppUserReturnable.getFirstname());
        assertSame(stringSet, actualAppUserReturnable.getFriendIdList());
        assertSame(interestSet, actualAppUserReturnable.getInterests());
        assertEquals("Doe", actualAppUserReturnable.getLastname());
        assertEquals("Public id", actualAppUserReturnable.getPublic_id());
        assertEquals("MD", actualAppUserReturnable.getState());
    }

    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link AppUserReturnable#AppUserReturnable(String, String, String, String, Integer, String, String, String, String, Set, Set)}
     *   <li>{@link AppUserReturnable#setAge(Integer)}
     *   <li>{@link AppUserReturnable#setBiography(String)}
     *   <li>{@link AppUserReturnable#setCity(String)}
     *   <li>{@link AppUserReturnable#setCountry(String)}
     *   <li>{@link AppUserReturnable#setEmail(String)}
     *   <li>{@link AppUserReturnable#setFirstname(String)}
     *   <li>{@link AppUserReturnable#setFriendIdList(Set)}
     *   <li>{@link AppUserReturnable#setInterests(Set)}
     *   <li>{@link AppUserReturnable#setLastname(String)}
     *   <li>{@link AppUserReturnable#setPublic_id(String)}
     *   <li>{@link AppUserReturnable#setState(String)}
     * </ul>
     */
    @Test
    void testConstructor2() {
        HashSet<Interest> interests = new HashSet<>();
        AppUserReturnable actualAppUserReturnable = new AppUserReturnable("Public id", "Jane", "Doe",
                "jane.doe@example.org", 1, "GB", "MD", "Oxford", "Biography", interests, new HashSet<>());
        actualAppUserReturnable.setAge(1);
        actualAppUserReturnable.setBiography("Biography");
        actualAppUserReturnable.setCity("Oxford");
        actualAppUserReturnable.setCountry("GB");
        actualAppUserReturnable.setEmail("jane.doe@example.org");
        actualAppUserReturnable.setFirstname("Jane");
        HashSet<String> stringSet = new HashSet<>();
        actualAppUserReturnable.setFriendIdList(stringSet);
        HashSet<Interest> interestSet = new HashSet<>();
        actualAppUserReturnable.setInterests(interestSet);
        actualAppUserReturnable.setLastname("Doe");
        actualAppUserReturnable.setPublic_id("Public id");
        actualAppUserReturnable.setState("MD");
        assertEquals(1, actualAppUserReturnable.getAge().intValue());
        assertEquals("Biography", actualAppUserReturnable.getBiography());
        assertEquals("Oxford", actualAppUserReturnable.getCity());
        assertEquals("GB", actualAppUserReturnable.getCountry());
        assertEquals("jane.doe@example.org", actualAppUserReturnable.getEmail());
        assertEquals("Jane", actualAppUserReturnable.getFirstname());
        assertSame(stringSet, actualAppUserReturnable.getFriendIdList());
        assertSame(interestSet, actualAppUserReturnable.getInterests());
        assertEquals("Doe", actualAppUserReturnable.getLastname());
        assertEquals("Public id", actualAppUserReturnable.getPublic_id());
        assertEquals("MD", actualAppUserReturnable.getState());
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
        HashSet<Interest> interests = new HashSet<>();
        AppUserReturnable appUserReturnable = new AppUserReturnable("Public id", "Jane", "Doe", "jane.doe@example.org", 1,
                "GB", "MD", "Oxford", "Biography", interests, new HashSet<>());
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals5() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        HashSet<Interest> interests = new HashSet<>();
        assertNotEquals(appUserReturnable, new AppUserReturnable("Public id", "Jane", "Doe", "jane.doe@example.org", 1,
                "GB", "MD", "Oxford", "Biography", interests, new HashSet<>()));
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
        appUserReturnable.setState("MD");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals12() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setCity("Oxford");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals13() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setBiography("Biography");
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals14() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setInterests(new HashSet<>());
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals15() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();
        appUserReturnable.setFriendIdList(new HashSet<>());
        assertNotEquals(appUserReturnable, new AppUserReturnable());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals16() {
        HashSet<Interest> interests = new HashSet<>();
        AppUserReturnable appUserReturnable = new AppUserReturnable("Public id", "Jane", "Doe", "jane.doe@example.org", 1,
                "GB", "MD", "Oxford", "Biography", interests, new HashSet<>());
        HashSet<Interest> interests1 = new HashSet<>();
        AppUserReturnable appUserReturnable1 = new AppUserReturnable("Public id", "Jane", "Doe", "jane.doe@example.org", 1,
                "GB", "MD", "Oxford", "Biography", interests1, new HashSet<>());

        assertEquals(appUserReturnable, appUserReturnable1);
        int expectedHashCodeResult = appUserReturnable.hashCode();
        assertEquals(expectedHashCodeResult, appUserReturnable1.hashCode());
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals17() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setPublic_id("Public id");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals18() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setFirstname("Jane");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals19() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setLastname("Doe");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals20() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setEmail("jane.doe@example.org");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals21() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setCountry("GB");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals22() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setState("MD");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals23() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setCity("Oxford");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals24() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setBiography("Biography");
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals25() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setInterests(new HashSet<>());
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }

    /**
     * Method under test: {@link AppUserReturnable#equals(Object)}
     */
    @Test
    void testEquals26() {
        AppUserReturnable appUserReturnable = new AppUserReturnable();

        AppUserReturnable appUserReturnable1 = new AppUserReturnable();
        appUserReturnable1.setFriendIdList(new HashSet<>());
        assertNotEquals(appUserReturnable, appUserReturnable1);
    }
}

