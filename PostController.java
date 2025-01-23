package com.backwork.backen.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PostController {

    @RequestMapping("/")
    public String greet(){
        return "hello world";
    }
}
