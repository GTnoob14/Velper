package com.ragnarok.connect.api.interests.repository;

import com.ragnarok.connect.api.interests.model.Interest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestRepository extends JpaRepository<Interest, Long> {
}
