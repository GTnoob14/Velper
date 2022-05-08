package com.ragnarok.connect.api.chat.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class ResourceMessageTest {
    /**
     * Method under test: {@link ResourceMessage#canEqual(Object)}
     */
    @Test
    void testCanEqual() {
        assertFalse((new ResourceMessage("Not all who wander are lost")).canEqual("Other"));
    }

    /**
     * Method under test: {@link ResourceMessage#canEqual(Object)}
     */
    @Test
    void testCanEqual2() {
        ResourceMessage resourceMessage = new ResourceMessage("Not all who wander are lost");
        assertTrue(resourceMessage.canEqual(new ResourceMessage("Not all who wander are lost")));
    }

    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link ResourceMessage#ResourceMessage()}
     *   <li>{@link ResourceMessage#setMessage(String)}
     * </ul>
     */
    @Test
    void testConstructor() {
        ResourceMessage actualResourceMessage = new ResourceMessage();
        actualResourceMessage.setMessage("Not all who wander are lost");
        assertEquals("Not all who wander are lost", actualResourceMessage.getMessage());
    }

    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link ResourceMessage#ResourceMessage(String)}
     *   <li>{@link ResourceMessage#setMessage(String)}
     * </ul>
     */
    @Test
    void testConstructor2() {
        ResourceMessage actualResourceMessage = new ResourceMessage("Not all who wander are lost");
        actualResourceMessage.setMessage("Not all who wander are lost");
        assertEquals("Not all who wander are lost", actualResourceMessage.getMessage());
    }

    /**
     * Method under test: {@link ResourceMessage#equals(Object)}
     */
    @Test
    void testEquals() {
        assertNotEquals(new ResourceMessage("Not all who wander are lost"), null);
        assertNotEquals(new ResourceMessage("Not all who wander are lost"), "Different type to ResourceMessage");
    }

    /**
     * Method under test: {@link ResourceMessage#equals(Object)}
     */
    @Test
    void testEquals2() {
        ResourceMessage resourceMessage = new ResourceMessage("Not all who wander are lost");
        assertEquals(resourceMessage, resourceMessage);
        int expectedHashCodeResult = resourceMessage.hashCode();
        assertEquals(expectedHashCodeResult, resourceMessage.hashCode());
    }

    /**
     * Method under test: {@link ResourceMessage#equals(Object)}
     */
    @Test
    void testEquals3() {
        ResourceMessage resourceMessage = new ResourceMessage("Not all who wander are lost");
        ResourceMessage resourceMessage1 = new ResourceMessage("Not all who wander are lost");
        assertEquals(resourceMessage, resourceMessage1);
        int expectedHashCodeResult = resourceMessage.hashCode();
        assertEquals(expectedHashCodeResult, resourceMessage1.hashCode());
    }

    /**
     * Method under test: {@link ResourceMessage#equals(Object)}
     */
    @Test
    void testEquals4() {
        ResourceMessage resourceMessage = new ResourceMessage("Message");
        assertNotEquals(resourceMessage, new ResourceMessage("Not all who wander are lost"));
    }

    /**
     * Method under test: {@link ResourceMessage#equals(Object)}
     */
    @Test
    void testEquals5() {
        ResourceMessage resourceMessage = new ResourceMessage(null);
        assertNotEquals(resourceMessage, new ResourceMessage("Not all who wander are lost"));
    }

    /**
     * Method under test: {@link ResourceMessage#equals(Object)}
     */
    @Test
    void testEquals6() {
        ResourceMessage resourceMessage = new ResourceMessage(null);
        ResourceMessage resourceMessage1 = new ResourceMessage(null);
        assertEquals(resourceMessage, resourceMessage1);
        int expectedHashCodeResult = resourceMessage.hashCode();
        assertEquals(expectedHashCodeResult, resourceMessage1.hashCode());
    }
}

