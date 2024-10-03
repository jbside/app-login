package com.example.login_auth_api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/user")
public class UserController {
    
    @GetMapping
    public ResponseEntity<String> getUser(){
        return ResponseEntity.ok("sucesso");
    }
}
