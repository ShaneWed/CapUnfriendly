package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

// http://localhost:8081/api/uhoh
@RestController
//@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class DemoController {
    @Value("${spring.application.name}")
    String appName;

    @GetMapping("/uhoh")
    public String homePage(Model model) {
        model.addAttribute("appName", appName);
        return "I hope this works";
    }
}
