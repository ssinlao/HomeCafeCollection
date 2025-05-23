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
@CrossOrigin(origins = "http://localhost:3000")  // allow requests from react frontend
public class Controller {

    /* Method getRecipes() returns a filtered list of recipes if the user chooses any filters or else it returns all of the recipes in the database
    *  boolean matchesType, matchesSearch, matchesEquip are used to check if the filters / search queries are used
    */

    @GetMapping("/api/recipes")
    public List<Recipe> getRecipes(
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "search", required = false) String search,
            @RequestParam(value = "equip", required = false) String equip
    ) throws IOException, GeneralSecurityException {

        List<Recipe> allRecipes = RecipeGoogleSheetsAPI.getRecipes();
        List<Recipe> filteredRecipes = new ArrayList<>();

        for (Recipe recipe : allRecipes) {
            boolean matchesType = (type == null || type.isEmpty()) || type.equalsIgnoreCase(recipe.getType());
            boolean matchesSearch = (search == null || search.isEmpty()) ||
                    recipe.getName().toLowerCase().contains(search.toLowerCase());
            boolean matchesEquip = (equip == null || equip.isEmpty()) || equip.equalsIgnoreCase(recipe.getEquip());
            if (matchesType && matchesSearch && matchesEquip) {
                filteredRecipes.add(recipe);
            }
        }

        return filteredRecipes;
    }
}