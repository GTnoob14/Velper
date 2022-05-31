package com.ragnarok.connect.api.interests.service;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.api.interests.repository.InterestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class InterestService {
    @Autowired
    private final InterestRepository interestRepository;

    public Optional<Interest> findInterestByName(String interest){
        return interestRepository.findByInterest(interest);
    }

    public Set<Interest> getInterests(){
        return interestRepository.findAll().stream().collect(Collectors.toSet());
    }

    public Interest addInterest(String interest){
        return interestRepository.save(new Interest(interest));
    }

}
