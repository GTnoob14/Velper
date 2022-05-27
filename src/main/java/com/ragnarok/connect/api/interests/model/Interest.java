package com.ragnarok.connect.api.interests.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="interests")
@NoArgsConstructor
@Getter @Setter
public class Interest {
    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    private String interest;

    public Interest(String interest) {
        this.interest = interest;
    }
}
