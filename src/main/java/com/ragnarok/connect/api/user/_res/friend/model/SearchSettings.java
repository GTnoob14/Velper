package com.ragnarok.connect.api.user._res.friend.model;


import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.*;

@Getter @Setter
@EqualsAndHashCode
@NoArgsConstructor
public class SearchSettings {
    private int scope = 0;
    //prefer friends of your friends
    private boolean mutualFriends = true;
    //prefer people with similar interests
    private boolean similarInterests = true;
    //prefer people with the same sex
    private boolean sameSex = true;

    public SearchSettings(int scope, boolean mutualFriends, boolean similarInterests, boolean sameSex){
        this.scope = scope;
        this.mutualFriends = mutualFriends;
        this.similarInterests = similarInterests;
        this.sameSex = sameSex;
    }

    public Scope getScope() {
        return Scope.fromVal(scope);
    }

    public enum Scope{
        city_scope(0), state_scope(1), national_scope(2), global_scope(3);
        @Getter
        private int val;

        Scope(int val){
            this.val = val;
        }

        @Override
        public String toString() {
            return ""+val;
        }

        @JsonCreator
        public static Scope fromVal(int val){
            for(Scope scope : Scope.values()){
                if(scope.getVal() == val){
                    return scope;
                }
            }
            throw new IllegalArgumentException(String.format("%s not a Scope value", val));
        }
    }
}
