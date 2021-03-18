package com.capstone.project.controllers;

import com.capstone.project.exception.ResourceNotFoundException;
import com.capstone.project.model.Ingredient;
import com.capstone.project.model.Pantry;
import com.capstone.project.model.User;
import com.capstone.project.services.IngredientService;
import com.capstone.project.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("api/pantry")
public class PantryController {

    private final UserService userService;
    private final IngredientService ingredientService;

    public PantryController(UserService userService, IngredientService ingredientService) {
        this.userService = userService;
        this.ingredientService = ingredientService;
    }


    //add ingredient to pantry for specific id
    @PutMapping("/addIngredient/{email}&{id}")
    public User updateUser(@RequestBody Pantry pantryItem, @PathVariable String email, @PathVariable long id) {

        User user = userService.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("There is no user with username" + email);
        }
        Ingredient ingredient = ingredientService.findById(id);
        if(ingredient == null){
            throw new ResourceNotFoundException("There is no ingredient with id" + id);
        }
        pantryItem.setIngredient(ingredient);
        user.addIngredientItem(pantryItem);
        return userService.save(user);
    }

    //get all pantry ingredients by email api
    @GetMapping("allPantry/{email}")
    public Set<Pantry> allPantry(@PathVariable String email){
        User user = userService.findByEmail(email);
        return user.getPantryIngredients();
    }
}
