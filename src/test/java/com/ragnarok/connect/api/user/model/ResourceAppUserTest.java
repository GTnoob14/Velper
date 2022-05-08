package com.ragnarok.connect.api.user.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

class ResourceAppUserTest {
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
     *   <li>{@link ResourceAppUser#setInterests(List)}
     *   <li>{@link ResourceAppUser#setLastname(String)}
     *   <li>{@link ResourceAppUser#setPassword(String)}
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
        ArrayList<String> stringList = new ArrayList<>();
        actualResourceAppUser.setInterests(stringList);
        actualResourceAppUser.setLastname("Doe");
        actualResourceAppUser.setPassword("iloveyou");
        assertEquals(1, actualResourceAppUser.getAge().intValue());
        assertEquals("Biography", actualResourceAppUser.getBiography());
        assertEquals("Oxford", actualResourceAppUser.getCity());
        assertEquals("GB", actualResourceAppUser.getCountry());
        assertEquals("jane.doe@example.org", actualResourceAppUser.getEmail());
        assertEquals("Jane", actualResourceAppUser.getFirstname());
        assertSame(stringList, actualResourceAppUser.getInterests());
        assertEquals("Doe", actualResourceAppUser.getLastname());
        assertEquals("iloveyou", actualResourceAppUser.getPassword());
    }

    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link ResourceAppUser#ResourceAppUser(String, String, String, String, Integer, String, String, String, List)}
     *   <li>{@link ResourceAppUser#setAge(Integer)}
     *   <li>{@link ResourceAppUser#setBiography(String)}
     *   <li>{@link ResourceAppUser#setCity(String)}
     *   <li>{@link ResourceAppUser#setCountry(String)}
     *   <li>{@link ResourceAppUser#setEmail(String)}
     *   <li>{@link ResourceAppUser#setFirstname(String)}
     *   <li>{@link ResourceAppUser#setInterests(List)}
     *   <li>{@link ResourceAppUser#setLastname(String)}
     *   <li>{@link ResourceAppUser#setPassword(String)}
     * </ul>
     */
    @Test
    void testConstructor2() {
        ArrayList<String> stringList = new ArrayList<>();
        ResourceAppUser actualResourceAppUser = new ResourceAppUser("Jane", "Doe", "iloveyou", "jane.doe@example.org", 1,
                "GB", "Oxford", "Biography", stringList);
        actualResourceAppUser.setAge(1);
        actualResourceAppUser.setBiography("Biography");
        actualResourceAppUser.setCity("Oxford");
        actualResourceAppUser.setCountry("GB");
        actualResourceAppUser.setEmail("jane.doe@example.org");
        actualResourceAppUser.setFirstname("Jane");
        ArrayList<String> stringList1 = new ArrayList<>();
        actualResourceAppUser.setInterests(stringList1);
        actualResourceAppUser.setLastname("Doe");
        actualResourceAppUser.setPassword("iloveyou");
        assertEquals(1, actualResourceAppUser.getAge().intValue());
        assertEquals("Biography", actualResourceAppUser.getBiography());
        assertEquals("Oxford", actualResourceAppUser.getCity());
        assertEquals("GB", actualResourceAppUser.getCountry());
        assertEquals("jane.doe@example.org", actualResourceAppUser.getEmail());
        assertEquals("Jane", actualResourceAppUser.getFirstname());
        List<String> interests = actualResourceAppUser.getInterests();
        assertSame(stringList1, interests);
        assertEquals(stringList, interests);
        assertEquals("Doe", actualResourceAppUser.getLastname());
        assertEquals("iloveyou", actualResourceAppUser.getPassword());
    }
}

