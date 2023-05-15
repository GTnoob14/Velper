package com.ragnarok.connect.api.user.model;

import com.ragnarok.connect.api.interests.model.Interest;
import com.ragnarok.connect.configurations.security.authorities.Authority;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;


@Entity(name = "users")
@NoArgsConstructor
@ToString
public class AppUser implements UserDetails {

    @Id
    @GeneratedValue
    @Getter @Setter
    private Long id;
    @Getter @Setter
    @Column(unique = true, nullable = false)
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
    @Column(unique = false, nullable = false)
    private Integer age;
    @Getter @Setter
    private String country;
    @Getter @Setter
    private String state;
    @Getter @Setter
    private String city;
    @Getter @Setter
    private String biography;
    @Setter
    @ManyToMany(fetch = FetchType.EAGER)
    //@LazyCollection(LazyCollectionOption.FALSE)
    private Set<Interest> interests;

    @Getter @Setter
    @Enumerated
    private Gender gender;

    //TODO enable only when email is verified
    @Setter
    @Column(unique = false, nullable = false)
    private boolean enabled;

    @Setter @Getter
    //{public_id} of AppUser's registered as friends of this
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name="user_friend", joinColumns = @JoinColumn(name="id"))
    @Column(name = "friends_publicid")
    private Set<String> friendList;

    @Setter
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Authority> authorities;

    public AppUser(String firstname, String lastname, String email, String password) {
        this(firstname, lastname, email, password, null, null, null, null, null);
    }

    public AppUser(String firstname, String lastname, String email, String password, Integer age, String country, String state, String city, Gender gender) {
        this(firstname, lastname, email, password, age, country, state, city, gender, "", new HashSet<>());
    }

    public AppUser(String firstname, String lastname, String email, String password, Integer age, String country, String state, String city, Gender gender, String biography, Set<Interest> interests) {
        this(firstname, lastname, email, password, age, country, state, city, gender, biography, interests, false, new HashSet<>(), new HashSet<>());
    }

    public AppUser(String firstname, String lastname, String email, String password, Integer age, String country, String state, String city, Gender gender, String biography, Set<Interest> interests, boolean enabled, Set<String> friendList, Set<Authority> authorities) {
        this.publicid = UUID.randomUUID().toString();
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.age = age;
        this.country = country;
        this.state = state;
        this.city = city;
        this.gender = gender;
        this.biography = biography;
        this.interests = interests;
        this.enabled = enabled;
        this.friendList = friendList;
        this.authorities = authorities;
    }

    public void addFriend(String publicid){
        if(friendList == null)
            friendList = new HashSet<>();
        this.friendList.add(publicid);
    }

    public void removeFriend(String publicid){
        if(friendList == null)
            friendList = new HashSet<>();
        this.friendList.remove(publicid);
    }

    public AppUserReturnable toReturnable(){
        return new AppUserReturnable(
                this.publicid, this.firstname, this.lastname, this.email, this.age, this.country, this.state, this.city, this.gender, this.biography, getInterests(), this.friendList
        );
    }

    public Set<Interest> getInterests(){
        return interests == null ? new HashSet<>() : interests;
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
        //NOTE: Temporarily Disabled the E-Mail Comfirmation Feature, for demonstration purposes
        return true;
        //return enabled;
    }
}
