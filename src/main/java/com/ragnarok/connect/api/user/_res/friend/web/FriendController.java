package com.ragnarok.connect.api.user._res.friend.web;

import com.ragnarok.connect.api.user._res.friend.model.SearchSettings;
import com.ragnarok.connect.api.user._res.friend.service.FriendService;
import com.ragnarok.connect.api.user.model.AppUser;
import com.ragnarok.connect.api.user.model.AppUserReturnable;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path="/api/v1/user/friends")
@RequiredArgsConstructor
public class FriendController {

    @Autowired
    private final FriendService friendService;

    @GetMapping("/find")
    public List<AppUserReturnable> findPotentialFriends(@AuthenticationPrincipal AppUser appUser, @RequestBody Optional<SearchSettings> searchSettings){
        return friendService.findPotentialFriends(appUser, searchSettings.orElse(new SearchSettings(SearchSettings.Scope.city_scope))).stream().map(AppUser::toReturnable).collect(Collectors.toList());
    }

    @GetMapping
    public List<AppUserReturnable> getFriends(@AuthenticationPrincipal AppUser appUser){
        return friendService.getFriends(appUser).stream().map(AppUser::toReturnable).collect(Collectors.toList());
    }

    @PostMapping("/{friend_id}")
    public void addFriend(@AuthenticationPrincipal AppUser appUser, @PathVariable(name="friend_id") String friend_id){
        friendService.addFriend(appUser, friend_id);
    }

    @DeleteMapping("/{friend_id}")
    public void deleteFriend(@AuthenticationPrincipal AppUser appUser, @PathVariable(name="friend_id") String friend_id){
        friendService.removeFriend(appUser, friend_id);
    }
}
