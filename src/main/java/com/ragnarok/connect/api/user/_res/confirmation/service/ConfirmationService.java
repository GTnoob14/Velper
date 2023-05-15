package com.ragnarok.connect.api.user._res.confirmation.service;

import com.ragnarok.connect.api.user._res.confirmation.model.ConfirmationToken;
import com.ragnarok.connect.api.user._res.confirmation.repository.ConfirmationRepository;
import com.ragnarok.connect.api.user.model.AppUser;
import com.ragnarok.connect.api.user.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;


//Email Confirmation Service by sending verification code to email
@Service
@RequiredArgsConstructor
public class ConfirmationService {

    @Autowired
    private final ConfirmationRepository confirmationRepository;
    @Autowired
    private final AppUserRepository appUserRepository;

    public void confirmToken(String email, String token) throws ConfirmationCodeMismatchException, ConfirmationCodeNotFoundException {

        return;

        //NOTE: Temporarily Disabled the E-Mail Comfirmation Feature, for demonstration purposes
//        ConfirmationToken confirmationToken = confirmationRepository.findByToken(token).orElseThrow(() -> new ConfirmationCodeNotFoundException(token));
//        if(!confirmationToken.getAppUser().getUsername().equals(email)){
//            throw new ConfirmationCodeMismatchException(String.format("%s isn't code of %s", token, email));
//        }
//        confirmationRepository.delete(confirmationToken);
//        AppUser appUser = appUserRepository.findByEmail(email).get();
//        appUser.setEnabled(true);
//        appUserRepository.save(appUser);
    }

    public ConfirmationToken saveConfirmationToken(AppUser appUser){
        ConfirmationToken token = new ConfirmationToken(
                UUID.randomUUID().toString().substring(0, 8),
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                null,
                appUser
        );
        return confirmationRepository.save(token);
    }
}
