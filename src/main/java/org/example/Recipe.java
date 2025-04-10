package org.example;

public class Recipe {
    String name;
    String ingredients;
    String equipment;
    String steps;
    String time;

    public Recipe(String name, String ingredients, String equipment, String steps, String time) {
        this.name = name;
        this.ingredients = ingredients;
        this.equipment = equipment;
        this.steps = steps;
        this.time = time;
    }

    public String getName() {
        return name;
    }

    public String getIngredients() {
        return ingredients;
    }

    public String getEquipment() {
        return equipment;
    }

    public String getSteps() {
        return steps;
    }

    public String getTime() {
        return time;
    }
}
