package com.ragnarok.connect.api.chat.service;

import com.ragnarok.connect.api.chat.model.Message;
import com.ragnarok.connect.api.chat.model.ResourceMessage;
import com.ragnarok.connect.api.chat.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ChatService {


    @Autowired
    private final ChatRepository chatRepository;

    public List<Message> getMessagesOfUser(Long id, String friend_id) {
        return chatRepository.findByUseridAndFriendid(id, friend_id);
    }

    public Message sendMessage(String id, String friend_id, ResourceMessage resourceMessage) {
        Message message = new Message(
                id,
                friend_id,
                resourceMessage.getMessage(),
                LocalDateTime.now()
        );
        return chatRepository.save(message);
    }

    public Message editMessage(Long id, String friend_id, String message_id, ResourceMessage resourceMessage) throws MessageNotFoundException {
        Message message = chatRepository.findById(id)
                .orElseThrow(() -> new MessageNotFoundException(id.toString()));
        message.setMessage(resourceMessage.getMessage());

        return chatRepository.save(message);
    }

    public void deleteOneMessage(Long id, String friend_id, Long message_id) {
        chatRepository.deleteById(message_id);
    }
}
