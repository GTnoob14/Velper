package com.ragnarok.connect.api.interests.service;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.api.interests.repository.InterestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InterestService {
    @Autowired
    private final InterestRepository interestRepository;


    public List<Interest> getInterests(){
        return interestRepository.findAll();
    }

    public Interest addInterest(String interest){
        return interestRepository.save(new Interest(interest));
    }

}
