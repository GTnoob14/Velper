package com.ragnarok.connect.api.chat.service;

public final class MessageNotFoundException extends Exception {
    MessageNotFoundException(){
        super();
    }
    MessageNotFoundException(String message){
        super(message);
    }
    MessageNotFoundException(String message, Throwable throwable){
        super(message, throwable);
    }
}
