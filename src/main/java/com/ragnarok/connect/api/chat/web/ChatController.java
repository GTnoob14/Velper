package com.ragnarok.connect.api.chat.web;

import com.ragnarok.connect.api.chat.model.Message;
import com.ragnarok.connect.api.chat.model.MessageReturnable;
import com.ragnarok.connect.api.chat.model.ResourceMessage;
import com.ragnarok.connect.api.chat.service.ChatService;
import com.ragnarok.connect.api.chat.service.MessageNotFoundException;
import com.ragnarok.connect.api.user.model.AppUser;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping(path="/api/v1/chat/{friend_id}")
public class ChatController {

    @Autowired
    private final ChatService chatService;
    @Autowired
    private final SimpMessagingTemplate simpMessagingTemplate;

    @GetMapping
    public List<MessageReturnable> getMessages(@AuthenticationPrincipal AppUser appUser, @PathVariable(name="friend_id") String friend_id){
        final Long principal_id = appUser.getId();
        return chatService.getMessagesOfUser(principal_id, friend_id).stream().map(Message::toReturnable).collect(Collectors.toList());
    }

    @MessageMapping("/messages/{friend_id}")
    public void sendMessage(@AuthenticationPrincipal AppUser appUser, @Payload ResourceMessage resourceMessage, @DestinationVariable(value="friend_id") String friend_id){

        final Long principal_id = appUser.getId();
        final String content = resourceMessage.getMessage();

        //Check if Message Content is valid
        if(!"".equals(content.replaceAll(" ", ""))) {

            final MessageReturnable messageReturnable = chatService.sendMessage(principal_id.toString(), friend_id, resourceMessage).toReturnable();

            simpMessagingTemplate.convertAndSendToUser(principal_id.toString(), "queue/messages/" + friend_id, messageReturnable);
            simpMessagingTemplate.convertAndSendToUser(friend_id, "queue/messages/" + principal_id, messageReturnable);
        }
    }

    @PutMapping("/{message_id}")
    public MessageReturnable editMessage(@AuthenticationPrincipal AppUser appUser, @PathVariable(name="friend_id") String friend_id, @PathVariable(name="message_id") String message_id, @RequestBody ResourceMessage resourceMessage) throws MessageNotFoundException {
        final Long principal_id = appUser.getId();
        return chatService.editMessage(principal_id, friend_id, message_id, resourceMessage).toReturnable();
    }

    @DeleteMapping("/{message_id}")
    public void deleteOneMessage(@AuthenticationPrincipal AppUser appUser, @PathVariable(name="friend_id") String friend_id, @PathVariable(name="message_id") Long message_id){
        final Long principal_id = appUser.getId();
        chatService.deleteOneMessage(principal_id, friend_id, message_id);
    }
}
