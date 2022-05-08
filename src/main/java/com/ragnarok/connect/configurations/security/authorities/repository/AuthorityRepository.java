package com.ragnarok.connect.configurations.security.authorities.repository;

import com.ragnarok.connect.configurations.security.authorities.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long> {
}
