package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HomeCafeCollectionApplication {

    public static void main(String[] args) {
        SpringApplication.run(HomeCafeCollectionApplication.class, args);
        System.out.println("Backend started");
    }

}