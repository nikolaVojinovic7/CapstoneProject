package com.capstone.project.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Category {
    //properties
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(nullable = false, name="name")
    private String name;

    @ManyToMany
    private Set<Recipe> linkedRecipes;

    public Category(long id, String name, Set<Recipe> linkedRecipes) {
        this.id = id;
        this.name = name;
        this.linkedRecipes = linkedRecipes;
    }

    public Category() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Recipe> getLinkedRecipes() {
        return linkedRecipes;
    }

    public void setLinkedRecipes(Set<Recipe> linkedRecipes) {
        this.linkedRecipes = linkedRecipes;
    }
}
