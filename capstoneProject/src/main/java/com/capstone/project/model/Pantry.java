package com.capstone.project.model;

import javax.persistence.*;

@Entity
public class Pantry {

    @ManyToOne(cascade = {CascadeType.ALL})
    private Ingredient ingredient;

    @Column
    private String expiryDate;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    //no arg constructor
    public Pantry(){
    }

    public Pantry(long id, Ingredient ingredient, String expiryDate) {
        this.id = id;
        this.ingredient = ingredient;
        this.expiryDate = expiryDate;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredients) {
        this.ingredient = ingredients;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }
}
