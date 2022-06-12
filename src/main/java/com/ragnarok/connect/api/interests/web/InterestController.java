package com.ragnarok.connect.api.interests.web;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.api.interests.service.InterestService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/interests")
public class InterestController {

    @Autowired
    private final InterestService interestService;

    @GetMapping
    public Set<Interest> getAllInterests(){
        return interestService.getInterests();
    }
}
