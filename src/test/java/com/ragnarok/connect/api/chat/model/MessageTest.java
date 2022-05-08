package com.ragnarok.connect.api.chat.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertSame;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;

class MessageTest {
    /**
     * Method under test: {@link Message#Message(String, String, String, LocalDateTime)}
     */
    @Test
    void testConstructor() {
        LocalDateTime ofResult = LocalDateTime.of(1, 1, 1, 1, 1);
        Message actualMessage = new Message("Userid", "Friendid", "Not all who wander are lost", ofResult);

        assertEquals("Friendid", actualMessage.getFriendid());
        assertFalse(actualMessage.isRead());
        assertNull(actualMessage.getId());
        assertNull(actualMessage.getReceivedAt());
        LocalDateTime sentAt = actualMessage.getSentAt();
        assertSame(ofResult, sentAt);
        assertEquals("Not all who wander are lost", actualMessage.getMessage());
        assertEquals("0001-01-01", sentAt.toLocalDate().toString());
        assertEquals("01:01", sentAt.toLocalTime().toString());
        assertEquals("Userid", actualMessage.getUserid());
        MessageReturnable toReturnableResult = actualMessage.toReturnable();
        assertEquals("Not all who wander are lost", toReturnableResult.getMessage());
        assertSame(ofResult, toReturnableResult.getSentAt());
        assertNull(toReturnableResult.getReceivedAt());
        assertNull(toReturnableResult.getId());
        assertFalse(toReturnableResult.isRead());
    }

    /**
     * Method under test: {@link Message#Message(String, String, String, LocalDateTime, LocalDateTime)}
     */
    @Test
    void testConstructor2() {
        LocalDateTime ofResult = LocalDateTime.of(1, 1, 1, 1, 1);
        LocalDateTime ofResult1 = LocalDateTime.of(1, 1, 1, 1, 1);
        Message actualMessage = new Message("Userid", "Friendid", "Not all who wander are lost", ofResult, ofResult1);

        assertEquals("Friendid", actualMessage.getFriendid());
        assertFalse(actualMessage.isRead());
        assertNull(actualMessage.getId());
        LocalDateTime receivedAt = actualMessage.getReceivedAt();
        assertSame(ofResult1, receivedAt);
        LocalDateTime sentAt = actualMessage.getSentAt();
        assertSame(ofResult, sentAt);
        assertEquals("0001-01-01", receivedAt.toLocalDate().toString());
        assertEquals("01:01", sentAt.toLocalTime().toString());
        assertEquals("01:01", receivedAt.toLocalTime().toString());
        assertEquals("0001-01-01", sentAt.toLocalDate().toString());
        assertEquals("Not all who wander are lost", actualMessage.getMessage());
        assertEquals("Userid", actualMessage.getUserid());
        MessageReturnable toReturnableResult = actualMessage.toReturnable();
        assertEquals("Not all who wander are lost", toReturnableResult.getMessage());
        assertSame(ofResult, toReturnableResult.getSentAt());
        assertSame(ofResult1, toReturnableResult.getReceivedAt());
        assertNull(toReturnableResult.getId());
        assertFalse(toReturnableResult.isRead());
    }

    /**
     * Method under test: {@link Message#toReturnable()}
     */
    @Test
    void testToReturnable() {
        MessageReturnable actualToReturnableResult = (new Message()).toReturnable();
        assertNull(actualToReturnableResult.getId());
        assertFalse(actualToReturnableResult.isRead());
        assertNull(actualToReturnableResult.getSentAt());
        assertNull(actualToReturnableResult.getReceivedAt());
        assertNull(actualToReturnableResult.getMessage());
    }
}

