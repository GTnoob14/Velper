package com.ragnarok.connect.api.user._res.friend.service;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.api.user._res.friend.model.SearchSettings;
import com.ragnarok.connect.api.user.model.AppUser;
import com.ragnarok.connect.api.user.repository.AppUserRepository;
import com.ragnarok.connect.api.user.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class FriendService {

    @Autowired
    private final AppUserRepository appUserRepository;
    @Autowired
    private final AppUserService appUserService;

    public List<AppUser> findPotentialFriends(AppUser user, SearchSettings searchSettings) {
        //TODO find all people with same country, then sort by distance, then look for mutual friends, then look for similar interests
        List<AppUser> potentialFriends;
        switch(searchSettings.getScope()){
            case city_scope:
                potentialFriends = appUserRepository.findByCityAndInterestsIn(user.getCity(), user.getInterests());
                //potentialFriends = appUserRepository.findByCity(user.getCity());
                break;
            case national_scope:
                potentialFriends = appUserRepository.findByCountryAndInterestsIn(user.getCountry(), user.getInterests());
                break;
            case global_scope:
                potentialFriends = appUserRepository.findByInterestsIn(user.getInterests());
                break;
            default:
                throw new IllegalArgumentException(String.format("Scope %s is not defined!", searchSettings.getScope().toString()));
        }
        return potentialFriends.stream().filter(friend -> !user.getFriendList().contains(friend.getPublicid()) && user.getPublicid() != friend.getPublicid()).collect(Collectors.toList());
    }

    public List<AppUser> getFriends(AppUser user) {
        return user
//        return appUserService.findUser(id)
                .getFriendList()
                .stream().map(friend -> appUserRepository.findByPublicid(friend)
                        .orElseThrow(() -> new UsernameNotFoundException(String.format("Friend %s does not exist!", friend))))
                .collect(Collectors.toList());
    }

    public void addFriend(AppUser user, String friend_id) {
//        AppUser user = appUserService.findUser(id);
        user.addFriend(friend_id);
        appUserRepository.save(user);
    }

    public void removeFriend(AppUser user, String friend_id) {
//        AppUser user = appUserService.findUser(id);
        user.removeFriend(friend_id);
        appUserRepository.save(user);
    }
}
