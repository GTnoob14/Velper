package com.ragnarok.connect.configurations.security.authorities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="authorities")
@NoArgsConstructor
public final class Authority {

    @Getter
    @Id
    @GeneratedValue
    private Long id;
    @Getter @Setter
    @Column(nullable = false)
    private String name;

    public Authority(String name){
        this.name = name;
    }

    public GrantedAuthority getAuthority(){
        return new SimpleGrantedAuthority(this.name);
    }
}
