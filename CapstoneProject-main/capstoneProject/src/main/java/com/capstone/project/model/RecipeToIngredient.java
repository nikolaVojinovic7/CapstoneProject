package com.capstone.project.model;

import javax.persistence.*;

@Entity
public class RecipeToIngredient {

    @ManyToOne
    private Ingredient ingredient;

    @Column
    private Double weight;

    @Column
    private String typeMeasurement;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    public RecipeToIngredient(){

    }

    public RecipeToIngredient(Ingredient ingredient, Double weight, String typeMeasurement, long id) {
        this.ingredient = ingredient;
        this.weight = weight;
        this.typeMeasurement = typeMeasurement;
        this.id = id;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public String getTypeMeasurement() {
        return typeMeasurement;
    }

    public void setTypeMeasurement(String typeMeasurement) {
        this.typeMeasurement = typeMeasurement;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
