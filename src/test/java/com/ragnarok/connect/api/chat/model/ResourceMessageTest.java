package com.ragnarok.connect.api.chat.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class ResourceMessageTest {
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
}

