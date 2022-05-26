package com.ragnarok.connect.api.user.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.Test;

class ResourceAppUserTest {
    /**
     * Method under test: {@link ResourceAppUser#canEqual(Object)}
     */
    @Test
    void testCanEqual() {
        assertFalse((new ResourceAppUser()).canEqual("Other"));
    }

    /**
     * Method under test: {@link ResourceAppUser#canEqual(Object)}
     */
    @Test
    void testCanEqual2() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        assertTrue(resourceAppUser.canEqual(new ResourceAppUser()));
    }

    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link ResourceAppUser#ResourceAppUser()}
     *   <li>{@link ResourceAppUser#setAge(Integer)}
     *   <li>{@link ResourceAppUser#setBiography(String)}
     *   <li>{@link ResourceAppUser#setCity(String)}
     *   <li>{@link ResourceAppUser#setCountry(String)}
     *   <li>{@link ResourceAppUser#setEmail(String)}
     *   <li>{@link ResourceAppUser#setFirstname(String)}
     *   <li>{@link ResourceAppUser#setInterests(Set)}
     *   <li>{@link ResourceAppUser#setLastname(String)}
     *   <li>{@link ResourceAppUser#setPassword(String)}
     *   <li>{@link ResourceAppUser#setState(String)}
     * </ul>
     */
    @Test
    void testConstructor() {
        ResourceAppUser actualResourceAppUser = new ResourceAppUser();
        actualResourceAppUser.setAge(1);
        actualResourceAppUser.setBiography("Biography");
        actualResourceAppUser.setCity("Oxford");
        actualResourceAppUser.setCountry("GB");
        actualResourceAppUser.setEmail("jane.doe@example.org");
        actualResourceAppUser.setFirstname("Jane");
        HashSet<String> stringSet = new HashSet<>();
        actualResourceAppUser.setInterests(stringSet);
        actualResourceAppUser.setLastname("Doe");
        actualResourceAppUser.setPassword("iloveyou");
        actualResourceAppUser.setState("MD");
        assertEquals(1, actualResourceAppUser.getAge().intValue());
        assertEquals("Biography", actualResourceAppUser.getBiography());
        assertEquals("Oxford", actualResourceAppUser.getCity());
        assertEquals("GB", actualResourceAppUser.getCountry());
        assertEquals("jane.doe@example.org", actualResourceAppUser.getEmail());
        assertEquals("Jane", actualResourceAppUser.getFirstname());
        assertSame(stringSet, actualResourceAppUser.getInterests());
        assertEquals("Doe", actualResourceAppUser.getLastname());
        assertEquals("iloveyou", actualResourceAppUser.getPassword());
        assertEquals("MD", actualResourceAppUser.getState());
    }

    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link ResourceAppUser#ResourceAppUser(String, String, String, String, Integer, String, String, String, String, Set)}
     *   <li>{@link ResourceAppUser#setAge(Integer)}
     *   <li>{@link ResourceAppUser#setBiography(String)}
     *   <li>{@link ResourceAppUser#setCity(String)}
     *   <li>{@link ResourceAppUser#setCountry(String)}
     *   <li>{@link ResourceAppUser#setEmail(String)}
     *   <li>{@link ResourceAppUser#setFirstname(String)}
     *   <li>{@link ResourceAppUser#setInterests(Set)}
     *   <li>{@link ResourceAppUser#setLastname(String)}
     *   <li>{@link ResourceAppUser#setPassword(String)}
     *   <li>{@link ResourceAppUser#setState(String)}
     * </ul>
     */
    @Test
    void testConstructor2() {
        ResourceAppUser actualResourceAppUser = new ResourceAppUser("Jane", "Doe", "iloveyou", "jane.doe@example.org", 1,
                "GB", "MD", "Oxford", "Biography", new HashSet<>());
        actualResourceAppUser.setAge(1);
        actualResourceAppUser.setBiography("Biography");
        actualResourceAppUser.setCity("Oxford");
        actualResourceAppUser.setCountry("GB");
        actualResourceAppUser.setEmail("jane.doe@example.org");
        actualResourceAppUser.setFirstname("Jane");
        HashSet<String> stringSet = new HashSet<>();
        actualResourceAppUser.setInterests(stringSet);
        actualResourceAppUser.setLastname("Doe");
        actualResourceAppUser.setPassword("iloveyou");
        actualResourceAppUser.setState("MD");
        assertEquals(1, actualResourceAppUser.getAge().intValue());
        assertEquals("Biography", actualResourceAppUser.getBiography());
        assertEquals("Oxford", actualResourceAppUser.getCity());
        assertEquals("GB", actualResourceAppUser.getCountry());
        assertEquals("jane.doe@example.org", actualResourceAppUser.getEmail());
        assertEquals("Jane", actualResourceAppUser.getFirstname());
        assertSame(stringSet, actualResourceAppUser.getInterests());
        assertEquals("Doe", actualResourceAppUser.getLastname());
        assertEquals("iloveyou", actualResourceAppUser.getPassword());
        assertEquals("MD", actualResourceAppUser.getState());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals() {
        assertNotEquals(new ResourceAppUser(), null);
        assertNotEquals(new ResourceAppUser(), "Different type to ResourceAppUser");
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals2() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        assertEquals(resourceAppUser, resourceAppUser);
        int expectedHashCodeResult = resourceAppUser.hashCode();
        assertEquals(expectedHashCodeResult, resourceAppUser.hashCode());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals3() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        assertEquals(resourceAppUser, resourceAppUser1);
        int expectedHashCodeResult = resourceAppUser.hashCode();
        assertEquals(expectedHashCodeResult, resourceAppUser1.hashCode());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals4() {
        ResourceAppUser resourceAppUser = new ResourceAppUser("Jane", "Doe", "iloveyou", "jane.doe@example.org", 1, "GB",
                "MD", "Oxford", "Biography", new HashSet<>());
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals5() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        assertNotEquals(resourceAppUser, new ResourceAppUser("Jane", "Doe", "iloveyou", "jane.doe@example.org", 1, "GB",
                "MD", "Oxford", "Biography", new HashSet<>()));
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals6() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        resourceAppUser.setFirstname("Jane");
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals7() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        resourceAppUser.setLastname("Doe");
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals8() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        resourceAppUser.setPassword("iloveyou");
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals9() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        resourceAppUser.setEmail("jane.doe@example.org");
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals10() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        resourceAppUser.setCountry("GB");
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals11() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        resourceAppUser.setState("MD");
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals12() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        resourceAppUser.setCity("Oxford");
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals13() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        resourceAppUser.setBiography("Biography");
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals14() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();
        resourceAppUser.setInterests(new HashSet<>());
        assertNotEquals(resourceAppUser, new ResourceAppUser());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals15() {
        ResourceAppUser resourceAppUser = new ResourceAppUser("Jane", "Doe", "iloveyou", "jane.doe@example.org", 1, "GB",
                "MD", "Oxford", "Biography", new HashSet<>());
        ResourceAppUser resourceAppUser1 = new ResourceAppUser("Jane", "Doe", "iloveyou", "jane.doe@example.org", 1, "GB",
                "MD", "Oxford", "Biography", new HashSet<>());

        assertEquals(resourceAppUser, resourceAppUser1);
        int expectedHashCodeResult = resourceAppUser.hashCode();
        assertEquals(expectedHashCodeResult, resourceAppUser1.hashCode());
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals16() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();

        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        resourceAppUser1.setFirstname("Jane");
        assertNotEquals(resourceAppUser, resourceAppUser1);
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals17() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();

        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        resourceAppUser1.setLastname("Doe");
        assertNotEquals(resourceAppUser, resourceAppUser1);
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals18() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();

        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        resourceAppUser1.setPassword("iloveyou");
        assertNotEquals(resourceAppUser, resourceAppUser1);
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals19() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();

        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        resourceAppUser1.setEmail("jane.doe@example.org");
        assertNotEquals(resourceAppUser, resourceAppUser1);
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals20() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();

        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        resourceAppUser1.setCountry("GB");
        assertNotEquals(resourceAppUser, resourceAppUser1);
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals21() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();

        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        resourceAppUser1.setState("MD");
        assertNotEquals(resourceAppUser, resourceAppUser1);
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals22() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();

        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        resourceAppUser1.setCity("Oxford");
        assertNotEquals(resourceAppUser, resourceAppUser1);
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals23() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();

        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        resourceAppUser1.setBiography("Biography");
        assertNotEquals(resourceAppUser, resourceAppUser1);
    }

    /**
     * Method under test: {@link ResourceAppUser#equals(Object)}
     */
    @Test
    void testEquals24() {
        ResourceAppUser resourceAppUser = new ResourceAppUser();

        ResourceAppUser resourceAppUser1 = new ResourceAppUser();
        resourceAppUser1.setInterests(new HashSet<>());
        assertNotEquals(resourceAppUser, resourceAppUser1);
    }
}

