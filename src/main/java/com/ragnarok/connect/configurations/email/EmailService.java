package com.ragnarok.connect.configurations.email;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
@RequiredArgsConstructor
public class EmailService implements EmailSender{


    @Autowired
    private final static Logger LOGGER = LoggerFactory.getLogger(EmailService.class);
    @Autowired
    private final JavaMailSender mailSender;

    @Override
    @Async
    public void send(String to, String subject, String email) {
        try{
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, "utf-8");
            helper.setSubject(subject);
            helper.setText(email, true);
            helper.setTo(to);
            helper.setFrom("gtkds007@gmail.com");

        } catch (MessagingException me){
            LOGGER.error("failed to send email", me);
            throw new IllegalStateException("failed to send email");
        }
    }
}
