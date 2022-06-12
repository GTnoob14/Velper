package com.ragnarok.connect.api.user._res.confirmation.service;

public final class ConfirmationCodeMismatchException extends RuntimeException{
    ConfirmationCodeMismatchException(String msg){
        super(msg);
    }
}
