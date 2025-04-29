package org.example;

public class Recipe {
    String name;
    String ingredients;
    String equip;
    String steps;
    String type;
    String time;
    String image;


    public Recipe(String name, String ingredients, String equip, String steps, String time, String type, String image) {
        this.name = name;
        this.ingredients = ingredients;
        this.equip = equip;
        this.steps = steps;
        this.time = time;
        this.type = type;
        this.image = image;
    }

    public String getName() { return name; }
    public String getIngredients() { return ingredients; }
    public String getEquip() { return equip; }
    public String getSteps() { return steps; }
    public String getTime() { return time; }
    public String getType() { return type; }
    public String getImage() { return image; }
}
