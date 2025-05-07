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
@CrossOrigin(origins = "http://localhost:3000")  // Allow requests from your React frontend
public class Controller {

    @GetMapping("/api/recipes")
    public List<Recipe> getRecipes(
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "search", required = false) String search
    ) throws IOException, GeneralSecurityException {

        List<Recipe> allRecipes = RecipeGoogleSheetsAPI.getRecipes();
        List<Recipe> filteredRecipes = new ArrayList<>();

        for (Recipe recipe : allRecipes) {
            boolean matchesType = (type == null || type.isEmpty()) || type.equalsIgnoreCase(recipe.getType());
            boolean matchesSearch = (search == null || search.isEmpty()) ||
                    recipe.getName().toLowerCase().contains(search.toLowerCase());

            if (matchesType && matchesSearch) {
                filteredRecipes.add(recipe);
            }
        }

        return filteredRecipes;
    }
}