package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HomeCafeCollectionApplication {

    public static void main(String[] args) {
        System.out.println("Launching Spring Boot app...");
        SpringApplication.run(HomeCafeCollectionApplication.class, args);
        System.out.println("Spring Boot app launched.");
        System.out.println("Backend started");
    }

}