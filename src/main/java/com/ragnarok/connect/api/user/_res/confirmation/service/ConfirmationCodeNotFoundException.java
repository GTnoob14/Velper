package com.ragnarok.connect.api.user._res.confirmation.service;

public final class ConfirmationCodeNotFoundException extends RuntimeException{
    ConfirmationCodeNotFoundException(String msg){
        super(msg);
    }
}
