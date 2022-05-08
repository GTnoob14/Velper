package com.ragnarok.connect.api.user.model;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.configurations.security.authorities.Authority;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;


@Entity(name = "users")
@NoArgsConstructor
public class AppUser implements UserDetails {

    @Id
    @GeneratedValue
    @Getter @Setter
    private Long id;
    @Getter @Setter
    @Column(unique = false, nullable = false)
    private String publicid;
    @Getter @Setter
    @Column(unique = false, nullable = false)
    private String firstname;
    @Getter @Setter
    @Column(unique = false, nullable = false)
    private String lastname;
    @Setter
    @Column(unique = true, nullable = false)
    private String email;
    @Setter
    @Column(unique = false, nullable = false)
    private String password;
    @Getter @Setter
    private Integer age;
    @Getter @Setter
    private String country;
    @Getter @Setter
    private String city;
    @Getter @Setter
    private String biography;
    @Getter @Setter
    @ManyToMany
    private List<Interest> interests;

    //TODO enable only when email is verified
    @Setter
    @Column(unique = false, nullable = false)
    private boolean enabled;

    @Getter @Setter
    //{public_id} of AppUser's registered as friends of this
    @ElementCollection
    @CollectionTable(name="user_friend", joinColumns = @JoinColumn(name="id"))
    @Column(name = "friends_publicid")
    private List<String> friendList;

    @Setter
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Authority> authorities;

    public AppUser(String firstname, String lastname, String email, String password) {
        this(firstname, lastname, email, password, null, null, null);
    }

    public AppUser(String firstname, String lastname, String email, String password, Integer age, String country, String city) {
        this(firstname, lastname, email, password, age, country, city, "", new ArrayList<>());
    }

    public AppUser(String firstname, String lastname, String email, String password, Integer age, String country, String city, String biography, List<Interest> interests) {
        this(firstname, lastname, email, password, age, country, city, biography, interests, false, new ArrayList<>(), new ArrayList<>());
    }

    public AppUser(String firstname, String lastname, String email, String password, Integer age, String country, String city, String biography, List<Interest> interests, boolean enabled, List<String> friendList, List<Authority> authorities) {
        this.publicid = UUID.randomUUID().toString();
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.age = age;
        this.country = country;
        this.city = city;
        this.biography = biography;
        this.interests = interests;
        this.enabled = enabled;
        this.friendList = friendList;
        this.authorities = authorities;
    }

    public void addFriend(String publicid){
        if(friendList == null)
            friendList = new ArrayList<>();
        this.friendList.add(publicid);
    }

    public void removeFriend(String publicid){
        if(friendList == null)
            friendList = new ArrayList<>();
        this.friendList.remove(publicid);
    }

    public AppUserReturnable toReturnable(){
        return new AppUserReturnable(
                this.publicid, this.firstname, this.lastname, this.email, this.age, this.country, this.city, this.biography, this.interests.stream().map(Interest::getInterest).collect(Collectors.toList()), this.friendList
        );
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities == null ? new ArrayList<>() : authorities.stream().map(Authority::getAuthority).collect(Collectors.toSet());
    }

    @Override
    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
        //return enabled;
    }
}
