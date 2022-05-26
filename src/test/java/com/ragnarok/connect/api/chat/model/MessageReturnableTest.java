package com.ragnarok.connect.api.chat.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;

class MessageReturnableTest {
    /**
     * Method under test: {@link MessageReturnable#canEqual(Object)}
     */
    @Test
    void testCanEqual() {
        assertFalse((new MessageReturnable()).canEqual("Other"));
    }

    /**
     * Method under test: {@link MessageReturnable#canEqual(Object)}
     */
    @Test
    void testCanEqual2() {
        MessageReturnable messageReturnable = new MessageReturnable();
        assertTrue(messageReturnable.canEqual(new MessageReturnable()));
    }

    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link MessageReturnable#MessageReturnable()}
     *   <li>{@link MessageReturnable#setId(Long)}
     *   <li>{@link MessageReturnable#setMessage(String)}
     *   <li>{@link MessageReturnable#setRead(boolean)}
     *   <li>{@link MessageReturnable#setReceivedAt(LocalDateTime)}
     *   <li>{@link MessageReturnable#setSentAt(LocalDateTime)}
     * </ul>
     */
    @Test
    void testConstructor() {
        MessageReturnable actualMessageReturnable = new MessageReturnable();
        actualMessageReturnable.setId(123L);
        actualMessageReturnable.setMessage("Not all who wander are lost");
        actualMessageReturnable.setRead(true);
        LocalDateTime ofResult = LocalDateTime.of(1, 1, 1, 1, 1);
        actualMessageReturnable.setReceivedAt(ofResult);
        LocalDateTime ofResult1 = LocalDateTime.of(1, 1, 1, 1, 1);
        actualMessageReturnable.setSentAt(ofResult1);
        assertEquals(123L, actualMessageReturnable.getId().longValue());
        assertEquals("Not all who wander are lost", actualMessageReturnable.getMessage());
        assertSame(ofResult, actualMessageReturnable.getReceivedAt());
        assertSame(ofResult1, actualMessageReturnable.getSentAt());
        assertTrue(actualMessageReturnable.isRead());
    }

    /**
     * Methods under test:
     *
     * <ul>
     *   <li>{@link MessageReturnable#MessageReturnable(Long, String, String, LocalDateTime, LocalDateTime, boolean)}
     *   <li>{@link MessageReturnable#setId(Long)}
     *   <li>{@link MessageReturnable#setMessage(String)}
     *   <li>{@link MessageReturnable#setRead(boolean)}
     *   <li>{@link MessageReturnable#setReceivedAt(LocalDateTime)}
     *   <li>{@link MessageReturnable#setSentAt(LocalDateTime)}
     * </ul>
     */
    @Test
    void testConstructor2() {
        LocalDateTime sentAt = LocalDateTime.of(1, 1, 1, 1, 1);
        MessageReturnable actualMessageReturnable = new MessageReturnable(123L, "publicid", "Not all who wander are lost", sentAt,
                LocalDateTime.of(1, 1, 1, 1, 1), true);
        actualMessageReturnable.setId(123L);
        actualMessageReturnable.setMessage("Not all who wander are lost");
        actualMessageReturnable.setRead(true);
        LocalDateTime ofResult = LocalDateTime.of(1, 1, 1, 1, 1);
        actualMessageReturnable.setReceivedAt(ofResult);
        LocalDateTime ofResult1 = LocalDateTime.of(1, 1, 1, 1, 1);
        actualMessageReturnable.setSentAt(ofResult1);
        assertEquals(123L, actualMessageReturnable.getId().longValue());
        assertEquals("Not all who wander are lost", actualMessageReturnable.getMessage());
        assertEquals("publicid", actualMessageReturnable.getPublic_id());
        assertSame(ofResult, actualMessageReturnable.getReceivedAt());
        assertSame(ofResult1, actualMessageReturnable.getSentAt());
        assertTrue(actualMessageReturnable.isRead());
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals() {
        assertNotEquals(new MessageReturnable(), null);
        assertNotEquals(new MessageReturnable(), "Different type to MessageReturnable");
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals2() {
        MessageReturnable messageReturnable = new MessageReturnable();
        assertEquals(messageReturnable, messageReturnable);
        int expectedHashCodeResult = messageReturnable.hashCode();
        assertEquals(expectedHashCodeResult, messageReturnable.hashCode());
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals3() {
        MessageReturnable messageReturnable = new MessageReturnable();
        MessageReturnable messageReturnable1 = new MessageReturnable();
        assertEquals(messageReturnable, messageReturnable1);
        int expectedHashCodeResult = messageReturnable.hashCode();
        assertEquals(expectedHashCodeResult, messageReturnable1.hashCode());
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals4() {
        LocalDateTime sentAt = LocalDateTime.of(1, 1, 1, 1, 1);
        MessageReturnable messageReturnable = new MessageReturnable(123L, "publicid", "Not all who wander are lost", sentAt,
                LocalDateTime.of(1, 1, 1, 1, 1), true);
        assertNotEquals(messageReturnable, new MessageReturnable());
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals5() {
        MessageReturnable messageReturnable = new MessageReturnable();
        messageReturnable.setId(123L);
        assertNotEquals(messageReturnable, new MessageReturnable());
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals6() {
        MessageReturnable messageReturnable = new MessageReturnable();
        messageReturnable.setMessage("Not all who wander are lost");
        assertNotEquals(messageReturnable, new MessageReturnable());
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals7() {
        MessageReturnable messageReturnable = new MessageReturnable();
        messageReturnable.setSentAt(LocalDateTime.of(1, 1, 1, 1, 1));
        assertNotEquals(messageReturnable, new MessageReturnable());
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals8() {
        MessageReturnable messageReturnable = new MessageReturnable();
        messageReturnable.setReceivedAt(LocalDateTime.of(1, 1, 1, 1, 1));
        assertNotEquals(messageReturnable, new MessageReturnable());
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals9() {
        LocalDateTime sentAt = LocalDateTime.of(1, 1, 1, 1, 1);
        MessageReturnable messageReturnable = new MessageReturnable(123L, "publicid", "Not all who wander are lost", sentAt,
                LocalDateTime.of(1, 1, 1, 1, 1), true);
        LocalDateTime sentAt1 = LocalDateTime.of(1, 1, 1, 1, 1);
        MessageReturnable messageReturnable1 = new MessageReturnable(123L, "publicid", "Not all who wander are lost", sentAt1,
                LocalDateTime.of(1, 1, 1, 1, 1), true);

        assertEquals(messageReturnable, messageReturnable1);
        int expectedHashCodeResult = messageReturnable.hashCode();
        assertEquals(expectedHashCodeResult, messageReturnable1.hashCode());
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals10() {
        MessageReturnable messageReturnable = new MessageReturnable();

        MessageReturnable messageReturnable1 = new MessageReturnable();
        messageReturnable1.setId(123L);
        assertNotEquals(messageReturnable, messageReturnable1);
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals11() {
        MessageReturnable messageReturnable = new MessageReturnable();

        MessageReturnable messageReturnable1 = new MessageReturnable();
        messageReturnable1.setMessage("Not all who wander are lost");
        assertNotEquals(messageReturnable, messageReturnable1);
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals12() {
        MessageReturnable messageReturnable = new MessageReturnable();

        MessageReturnable messageReturnable1 = new MessageReturnable();
        messageReturnable1.setSentAt(LocalDateTime.of(1, 1, 1, 1, 1));
        assertNotEquals(messageReturnable, messageReturnable1);
    }

    /**
     * Method under test: {@link MessageReturnable#equals(Object)}
     */
    @Test
    void testEquals13() {
        MessageReturnable messageReturnable = new MessageReturnable();

        MessageReturnable messageReturnable1 = new MessageReturnable();
        messageReturnable1.setReceivedAt(LocalDateTime.of(1, 1, 1, 1, 1));
        assertNotEquals(messageReturnable, messageReturnable1);
    }
}

