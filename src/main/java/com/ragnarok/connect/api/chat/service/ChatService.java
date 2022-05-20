package com.ragnarok.connect.api.chat.service;

import com.ragnarok.connect.api.chat.model.Message;
import com.ragnarok.connect.api.chat.model.ResourceMessage;
import com.ragnarok.connect.api.chat.repository.ChatRepository;
import com.ragnarok.connect.api.user.model.AppUser;
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

    public List<Message> getMessagesOfUser(AppUser user, String friend_id) {
        return chatRepository.findByUseridAndFriendid(user.getId(), friend_id);
    }

    public Message sendMessage(AppUser appUser, String friend_id, ResourceMessage resourceMessage) throws EmptyMessageException {
        if(resourceMessage.getMessage() == null || resourceMessage.getMessage().isEmpty())
            throw new EmptyMessageException();

        Message message = new Message(
                appUser.getId(),
                friend_id,
                resourceMessage.getMessage(),
                LocalDateTime.now()
        );

        return chatRepository.save(message);
    }

    public Message editMessage(AppUser appUser, String friend_id, String message_id, ResourceMessage resourceMessage) throws MessageNotFoundException {
        Message message = chatRepository.findById(appUser.getId())
                .orElseThrow(() -> new MessageNotFoundException(appUser.getId().toString()));
        message.setMessage(resourceMessage.getMessage());

        return chatRepository.save(message);
    }

    public void deleteOneMessage(AppUser appUser, String friend_id, Long message_id) {
        chatRepository.deleteById(message_id);
    }
}
