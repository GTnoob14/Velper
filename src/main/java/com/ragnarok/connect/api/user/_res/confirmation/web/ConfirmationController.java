package com.ragnarok.connect.api.user._res.confirmation.web;

import com.ragnarok.connect.api.user._res.confirmation.model.ResourceConfirmationToken;
import com.ragnarok.connect.api.user._res.confirmation.service.ConfirmationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user/token")
public class ConfirmationController {

    @Autowired
    private final ConfirmationService confirmationService;

    @PostMapping
    public void confirmAccount(@RequestBody ResourceConfirmationToken resourceConfirmationToken){
        confirmationService.confirmToken(resourceConfirmationToken.getEmail(), resourceConfirmationToken.getToken());
    }
}
