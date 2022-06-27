package com.ragnarok.connect.api.user._res.friend.service;

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
        //TODO find all people with same country/city/state, then sort by distance, then look for mutual friends, then look for similar interests
        List<AppUser> potentialFriends;
        switch(searchSettings.getScope()){
            case city_scope:
                if(searchSettings.isSimilarInterests()) {
                    potentialFriends = appUserRepository.findByCityAndInterestsIn(user.getCity(), user.getInterests());
                }else{
                    potentialFriends = appUserRepository.findByCity(user.getCity());
                }
                break;
            case state_scope:
                if(searchSettings.isSimilarInterests()) {
                    potentialFriends = appUserRepository.findByStateAndInterestsIn(user.getState(), user.getInterests());
                }else{
                    potentialFriends = appUserRepository.findByState(user.getState());
                }
                break;
            case national_scope:
                if(searchSettings.isSimilarInterests()) {
                    potentialFriends = appUserRepository.findByCountryAndInterestsIn(user.getCountry(), user.getInterests());
                }else{
                    potentialFriends = appUserRepository.findByCountry(user.getCountry());
                }
                break;
            case global_scope:
                if(searchSettings.isSimilarInterests()) {
                    potentialFriends = appUserRepository.findByInterestsIn(user.getInterests());
                }else {
                    potentialFriends = appUserRepository.findAll();
                }
                break;
            default:
                throw new IllegalArgumentException(String.format("Scope %s is not defined!", searchSettings.getScope().toString()));
        }

        if(searchSettings.isMutualFriends()){
            //TODO: find and prefer mutual friends
        }

        potentialFriends = potentialFriends.stream()
                .filter(friend -> !user.getFriendList().contains(friend.getPublicid()) && //remove already added friends
                        user.getPublicid() != friend.getPublicid()) //remove yourself
                .sorted((f1, f2) -> Boolean.compare(f2.getFriendList().contains(user.getPublicid()), f1.getFriendList().contains(user.getPublicid()))) //put people who added you first
                .collect(Collectors.toList());


        return potentialFriends;
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
