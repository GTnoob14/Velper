package com.ragnarok.connect.api.user.repository;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.api.user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findByEmail(String username);
    Optional<AppUser> findByPublicid(String friend);
    List<AppUser> findByCity(String city);
    List<AppUser> findByCountry(String country);
    List<AppUser> findByInterestsIn(Set<Interest> interests);
    List<AppUser> findByCityAndInterestsIn(String city, Set<Interest> interest);
    List<AppUser> findByCountryAndInterestsIn(String city, Set<Interest> interests);
}
