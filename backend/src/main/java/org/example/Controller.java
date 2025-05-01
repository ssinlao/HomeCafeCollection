package org.example;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")  // Allow requests from your React frontend
public class Controller {

    @GetMapping("/api/recipes")
    public List<Recipe> getRecipes(@RequestParam(value = "type", required = false) String type) throws IOException, GeneralSecurityException {

        List<Recipe> allRecipes = RecipeGoogleSheetsAPI.getRecipes();

        if (type == null || type.isEmpty()) {
            return allRecipes; // no filter, return everything
        }

        // type is used for filtering function in react
        List<Recipe> filteredRecipes = new ArrayList<>();
        for (Recipe recipe : allRecipes) {
            if (type.equalsIgnoreCase(recipe.getType())) {
                filteredRecipes.add(recipe);
            }
        }

        return filteredRecipes;
    }
}