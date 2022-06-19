package com.ragnarok.connect.api.user.service;

import com.ragnarok.connect.api.interests.service.InterestService;
import com.ragnarok.connect.api.user._res.confirmation.model.ConfirmationToken;
import com.ragnarok.connect.api.user._res.confirmation.service.ConfirmationService;
import com.ragnarok.connect.api.user.model.AppUser;
import com.ragnarok.connect.api.user.model.ResourceAppUser;
import com.ragnarok.connect.api.user.repository.AppUserRepository;
import com.ragnarok.connect.configurations.email.EmailSender;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class AppUserService implements UserDetailsService {

    @Autowired
    private final AppUserRepository appUserRepository;
    @Autowired
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private final InterestService interestService;
    @Autowired
    private final ConfirmationService confirmationService;
    @Autowired
    private final EmailSender emailSender;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return appUserRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }


    public List<AppUser> getAllUsers() {
        return appUserRepository.findAll();
    }

    public AppUser findUser(Long id) {
        return appUserRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException(id.toString()));
    }

    public AppUser findUserByPublicID(String publicid) {
        return appUserRepository.findByPublicid(publicid)
                .orElseThrow(() -> new UsernameNotFoundException(publicid));
    }

    public void createUser(ResourceAppUser resourceAppUser) {
        AppUser appUser = appUserRepository.save(new AppUser(
                resourceAppUser.getFirstname(),
                resourceAppUser.getLastname(),
                resourceAppUser.getEmail(),
                bCryptPasswordEncoder.encode(resourceAppUser.getPassword()),
                resourceAppUser.getAge(),
                resourceAppUser.getCountry(),
                resourceAppUser.getState(),
                resourceAppUser.getCity(),
                resourceAppUser.getBiography(),
                resourceAppUser.getInterests() == null ? null : resourceAppUser.getInterests().stream().map(i -> interestService.findInterestByName(i).orElseGet(() -> interestService.addInterest(i))).collect(Collectors.toSet())
        ));

        ConfirmationToken token = confirmationService.saveConfirmationToken(appUser);

        emailSender.send(appUser.getUsername(), "Verification Code for Velper.net", String.format("Verification Code: %s\nor\nVerification Link: https://velper.net/api/v1/user/token/%s/%s", token.getToken(), appUser.getUsername(), token.getToken()));
    }

    public AppUser updateUser(Long id, ResourceAppUser resourceAppUser) {
        AppUser user = appUserRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException(id.toString()));
        if(resourceAppUser.getFirstname() != null)
            user.setFirstname(resourceAppUser.getFirstname());
        if(resourceAppUser.getLastname() != null)
            user.setLastname(resourceAppUser.getLastname());
        if(resourceAppUser.getEmail() != null)
            user.setEmail(resourceAppUser.getEmail());
        if(resourceAppUser.getAge() != null)
            user.setAge(resourceAppUser.getAge());
        if(resourceAppUser.getCountry() != null)
            user.setCountry(resourceAppUser.getCountry());
        if(resourceAppUser.getState() != null)
            user.setState(resourceAppUser.getState());
        if(resourceAppUser.getCity() != null)
            user.setCity(resourceAppUser.getCity());
        if(resourceAppUser.getBiography() != null)
            user.setBiography(resourceAppUser.getBiography());
        if(resourceAppUser.getInterests() != null)
            user.setInterests(resourceAppUser.getInterests().stream().map(i -> interestService.findInterestByName(i).orElseGet(() -> interestService.addInterest(i))).collect(Collectors.toSet()));
        return appUserRepository.save(user);
    }

    public void removeUser(Long id) {
        appUserRepository.deleteById(id);
    }

}
