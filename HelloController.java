package com.backwork.backen.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("")
    public String greet(HttpServletRequest request){

        return "Welcome to my world apurva " + request.getSession().getId();
    }

}
