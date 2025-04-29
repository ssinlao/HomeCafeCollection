package org.example;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")  // Allow requests from your React frontend
public class Controller {

    @GetMapping("/api/recipes")
    public List<Recipe> getRecipes() throws IOException, GeneralSecurityException {
        return RecipeGoogleSheetsAPI.getRecipes();
    }
}