package com.ragnarok.connect.api.user._res.confirmation.web;

final class ConfirmationCodeException extends RuntimeException {
    ConfirmationCodeException(){super();}
    ConfirmationCodeException(Exception ex){super(ex);}
}
