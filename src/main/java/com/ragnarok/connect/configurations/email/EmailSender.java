package com.ragnarok.connect.configurations.email;

public interface EmailSender {
    void send(String to, String subject, String email);
}
