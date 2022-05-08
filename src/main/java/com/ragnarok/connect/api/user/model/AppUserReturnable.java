package com.ragnarok.connect.api.user.model;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@EqualsAndHashCode
public class AppUserReturnable {

    private String public_id;
    private String firstname;
    private String lastname;
    private String email;
    private Integer age;
    private String country;
    private String city;
    private String biography;
    private List<String> interests;
    private List<String> friendIdList;

}
