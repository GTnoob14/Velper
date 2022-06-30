package com.ragnarok.connect.api.user.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Gender {
    @JsonProperty("male") MALE, @JsonProperty("female") FEMALE, @JsonProperty("diverse") DIVERSE;
}
