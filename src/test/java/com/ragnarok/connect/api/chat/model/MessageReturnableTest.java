package com.ragnarok.connect.api.chat.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;

class MessageReturnableTest {
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
     *   <li>{@link MessageReturnable#MessageReturnable(Long, String, LocalDateTime, LocalDateTime, boolean)}
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
        MessageReturnable actualMessageReturnable = new MessageReturnable(123L, "Not all who wander are lost", sentAt,
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
        assertSame(ofResult, actualMessageReturnable.getReceivedAt());
        assertSame(ofResult1, actualMessageReturnable.getSentAt());
        assertTrue(actualMessageReturnable.isRead());
    }
}

