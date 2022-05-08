package com.ragnarok.connect.api.user._res.friend.model;


import lombok.*;

@NoArgsConstructor
@Getter @Setter
@EqualsAndHashCode
public class SearchSettings {
    private Scope scope;
    private boolean mutualFriends;
    private boolean similarInterests;

    public SearchSettings(Scope scope){
        this.scope = scope;
    }

    public enum Scope{
        city_scope(0), national_scope(1), global_scope(2);
        @Getter
        private int val;

        Scope(int val){
            this.val = val;
        }
    }
}
