package org.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  // Indicates that this is a REST controller
@RequestMapping("/api")  // Define base URL for all API endpoints in this controller
public class Controller {

    @GetMapping("/hello")  // Define an endpoint for a GET request
    public String sayHello() {
        return "Hello from Spring Boot!";
    }
}