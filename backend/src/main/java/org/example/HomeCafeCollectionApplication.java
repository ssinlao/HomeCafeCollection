package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/* This class is used to start the Java application which connects to the React frontend using Spring framework
*  This is the main file that is run after GoogleSheetsConfig has been run and configured.
*/
@SpringBootApplication
public class HomeCafeCollectionApplication {

    public static void main(String[] args) {
        SpringApplication.run(HomeCafeCollectionApplication.class, args);
        System.out.println("Backend started");
    }

}