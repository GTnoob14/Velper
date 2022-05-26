package com.ragnarok.connect.api;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

//PropertySource to use application-dev.properties containing api keys [csc-api-key]
@PropertySource("classpath:application-dev.properties")
@RestController
@RequestMapping(path="api/v1/csc")
public class CountryStateCityAPI {

    @Autowired
    private final RestTemplate restTemplate;

    public CountryStateCityAPI(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    private static final String base_url = "https://api.countrystatecity.in/v1";

    @Value("${csc-api-key}")
    private String csc_apikey;


    @GetMapping("/countries")
    public Country[] getAllCountries(){
        String url = String.format("%s/countries/", base_url);
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-CSCAPI-KEY", csc_apikey);

        HttpEntity request = new HttpEntity(headers);
        return restTemplate.exchange(url, HttpMethod.GET, request, Country[].class).getBody();
    }

    @GetMapping("/states/{country_id}")
    public State[] findStatesByCountry(@PathVariable("country_id") String country_id){
        String url = String.format("%s/countries/%s/states", base_url, country_id);
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-CSCAPI-KEY", csc_apikey);

        HttpEntity request = new HttpEntity(headers);
        return restTemplate.exchange(url, HttpMethod.GET, request, State[].class).getBody();
    }

    @GetMapping("/cities/{country_id}/{state_id}")
    public City[] findCitiesByStateAndCountry(@PathVariable("country_id") String country_id, @PathVariable("state_id") String state_id){
        String url = String.format("%s/countries/%s/states/%s/cities", base_url, country_id, state_id);
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-CSCAPI-KEY", csc_apikey);

        HttpEntity request = new HttpEntity(headers);
        return restTemplate.exchange(url, HttpMethod.GET, request, City[].class).getBody();
    }

    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    static class Country{
        private long id;
        private String name;
        private String iso2;
    }

    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    static class State{
        private long id;
        private String name;
        private String iso2;
    }

    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    static class City{
        private long id;
        private String name;
    }
}

