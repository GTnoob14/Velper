package com.ragnarok.connect.api.chat.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity(name="messages")
@NoArgsConstructor
public class Message {

    @GeneratedValue
    @Id
    @Getter
    private Long id;
    @Getter @Setter
    private String userid;
    @Getter @Setter
    private String friendid;
    @Getter @Setter
    private String message;
    @Getter @Setter
    private LocalDateTime sentAt;
    @Getter @Setter
    private LocalDateTime receivedAt;
    @Getter @Setter
    private boolean read;

    public Message(String userid, String friendid, String message, LocalDateTime sentAt) {
        this(userid, friendid, message, sentAt, null);
    }

    public Message(String userid, String friendid, String message, LocalDateTime sentAt, LocalDateTime receivedAt) {
        this.userid = userid;
        this.friendid = friendid;
        this.message = message;
        this.sentAt = sentAt;
        this.receivedAt = receivedAt;
        this.read = false;
    }

    public MessageReturnable toReturnable(){
        return new MessageReturnable(
                id, message, sentAt, receivedAt, read
        );
    }
}
