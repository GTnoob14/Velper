package com.ragnarok.connect.api.chat.repository;

import com.ragnarok.connect.api.chat.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Message, Long> {

    List<Message> findByUseridAndFriendid(Long id, String friend_id);
    
}
