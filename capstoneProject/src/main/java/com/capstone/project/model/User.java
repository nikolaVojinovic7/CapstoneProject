package com.capstone.project.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class User {

    //properties
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(nullable = false, name="username")
    private String username;

    @Column(nullable = false, name = "email")
    private String email;

    @Column(nullable = false, name="password")
    private String password;

    @ManyToMany
    private Set<Ingredient> pantryIngredients;

    //no arg constructor
    public User(){
    }
    //constructor
    public User(long id, String username, String password, String email, Set<Ingredient> pantryIngredients) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.pantryIngredients = pantryIngredients;
    }

    //getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Ingredient> getPantryIngredients() {
        return pantryIngredients;
    }

    public void setPantryIngredients(Set<Ingredient> pantryIngredients) {
        this.pantryIngredients = pantryIngredients;
    }

    public void addIngredientItem(Ingredient item){
        pantryIngredients.add(item);
    }
}
