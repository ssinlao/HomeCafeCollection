package org.example;

public class Recipe {
    String name;
    String ingredients;
    String equip;
    String type;
    String steps;

    public Recipe(String name, String ingredients, String equip, String type, String steps) {
        this.name = name;
        this.ingredients = ingredients;
        this.equip = equip;
        this.type = type;
        this.steps = steps;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getEquip() {
        return equip;
    }

    public void setEquip(String equip) {
        this.equip = equip;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSteps() {
        return steps;
    }

    public void setSteps(String steps) {
        this.steps = steps;
    }
}
