package com.ragnarok.connect.api.user.model;

import com.ragnarok.connect.api.interests.model.Interest;
import lombok.*;

import java.util.Set;

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
    private Set<Interest> interests;
    private Set<String> friendIdList;

}
