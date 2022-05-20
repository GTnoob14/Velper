package com.ragnarok.connect.api.chat.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor @AllArgsConstructor
public class MessageReturnable {
    private Long id;
    private String public_id;
    private String message;
    private LocalDateTime sentAt;
    private LocalDateTime receivedAt;
    private boolean read;
}
