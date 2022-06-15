package com.ragnarok.connect.api.user.web;

import com.ragnarok.connect.api.user.model.AppUser;
import com.ragnarok.connect.api.user.model.AppUserReturnable;
import com.ragnarok.connect.api.user.model.ResourceAppUser;
import com.ragnarok.connect.api.user.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(path="/api/v1/user")
@RequiredArgsConstructor
public class AppUserController {

    @Autowired
    private final AppUserService appUserService;

//    //TODO ONLY FOR DEBUG
//    @GetMapping(path="/all")
//    public List<AppUser> getUsers(){
//        return appUserService.getAllUsers();
//    }

    @GetMapping
    public AppUserReturnable getUser(@AuthenticationPrincipal AppUser appUser){
        Long principal_id = appUser.getId();
        return appUserService.findUser(principal_id).toReturnable();
    }

    @GetMapping(path="/{publicid}")
    public AppUserReturnable getUserDetails(@PathVariable(name="publicid") String publicid){
        return appUserService.findUserByPublicID(publicid).toReturnable();
    }

    @PreAuthorize("permitAll()")
    @PostMapping("/add")
    public void signUp(@RequestBody ResourceAppUser resourceAppUser){
        appUserService.createUser(resourceAppUser);
    }

    @PutMapping
    public AppUserReturnable updateUser(@AuthenticationPrincipal AppUser appUser, @RequestBody ResourceAppUser resourceAppUser){
        Long principal_id = appUser.getId();
        return appUserService.updateUser(principal_id, resourceAppUser).toReturnable();
    }

    @DeleteMapping
    public void deleteUser(@AuthenticationPrincipal AppUser appUser){
        Long principal_id = appUser.getId();
        appUserService.removeUser(principal_id);
    }
}
