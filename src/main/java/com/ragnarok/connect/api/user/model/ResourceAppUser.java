package com.ragnarok.connect.api.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor @AllArgsConstructor
public class ResourceAppUser {

    private String firstname;
    private String lastname;
    private String password;
    private String email;
    private Integer age;
    private String country;
    private String state;
    private String city;
    private Gender gender;
    private String biography;
    private Set<String> interests;
}
