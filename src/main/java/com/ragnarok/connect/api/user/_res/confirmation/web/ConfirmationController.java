package com.ragnarok.connect.api.user._res.confirmation.web;

import com.ragnarok.connect.api.user._res.confirmation.model.ResourceConfirmationToken;
import com.ragnarok.connect.api.user._res.confirmation.service.ConfirmationCodeMismatchException;
import com.ragnarok.connect.api.user._res.confirmation.service.ConfirmationCodeNotFoundException;
import com.ragnarok.connect.api.user._res.confirmation.service.ConfirmationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user/token")
public class ConfirmationController {

    @Autowired
    private final ConfirmationService confirmationService;

    @PostMapping
    public void confirmAccount(@RequestBody ResourceConfirmationToken resourceConfirmationToken) {
        try {
            confirmationService.confirmToken(resourceConfirmationToken.getEmail(), resourceConfirmationToken.getToken());
        } catch(ConfirmationCodeMismatchException confirmationCodeMismatchException){
            throw new ConfirmationCodeException(confirmationCodeMismatchException);
        } catch(ConfirmationCodeNotFoundException confirmationCodeNotFoundException){
            throw new ConfirmationCodeException(confirmationCodeNotFoundException);
        }
    }
}

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1/user/token")
class ConfirmationControllerLink{

    @Autowired
    private final ConfirmationService confirmationService;

    @GetMapping("/{email}/{token}")
    public String confirmAccountWithLink(@PathVariable(name="email") String email, @PathVariable(name="token") String token){
        try {
            confirmationService.confirmToken(email, token);
        } catch(ConfirmationCodeMismatchException confirmationCodeMismatchException){
            throw new ConfirmationCodeException(confirmationCodeMismatchException);
        } catch(ConfirmationCodeNotFoundException confirmationCodeNotFoundException){
            throw new ConfirmationCodeException(confirmationCodeNotFoundException);
        }
        return "redirect:/login";
    }
}