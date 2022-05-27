package com.ragnarok.connect.api.user.service;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.api.interests.service.InterestService;
import com.ragnarok.connect.api.user.model.AppUser;
import com.ragnarok.connect.api.user.model.ResourceAppUser;
import com.ragnarok.connect.api.user.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.function.Supplier;
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
        appUserRepository.save(new AppUser(
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
    }

    public AppUser updateUser(Long id, ResourceAppUser resourceAppUser) {
        AppUser user = appUserRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException(id.toString()));
        user.setFirstname(resourceAppUser.getFirstname());
        user.setLastname(resourceAppUser.getLastname());
        user.setEmail(resourceAppUser.getEmail());
        user.setAge(resourceAppUser.getAge());
        user.setCountry(resourceAppUser.getCountry());
        user.setState(resourceAppUser.getState());
        user.setCity(resourceAppUser.getCity());
        user.setBiography(resourceAppUser.getBiography());
        user.setInterests(resourceAppUser.getInterests() == null ? null : resourceAppUser.getInterests().stream().map(i -> interestService.findInterestByName(i).orElseGet(() -> interestService.addInterest(i))).collect(Collectors.toSet()));
        return appUserRepository.save(user);
    }

    public void removeUser(Long id) {
        appUserRepository.deleteById(id);
    }

}
