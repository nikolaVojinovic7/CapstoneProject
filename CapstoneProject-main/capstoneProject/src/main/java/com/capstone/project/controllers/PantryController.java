package com.capstone.project.controllers;

import com.capstone.project.exception.ResourceNotFoundException;
import com.capstone.project.model.Ingredient;
import com.capstone.project.model.User;
import com.capstone.project.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("api/pantry")
public class PantryController {

    private final UserService userService;

    public PantryController(UserService userService) {
        this.userService = userService;
    }


    // update employee rest api
    @PutMapping("/addIngredient/{email}")
    public User updateUser(@RequestBody Ingredient ingredient, @PathVariable String email) {

        User user = userService.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("There is no user with username" + email);
        }
        user.addIngredientItem(ingredient);
        return userService.save(user);
    }

    //get all users api
    @GetMapping("allPantry/{email}")
    public Set<Ingredient> allPantry(@PathVariable String email){
        User user = userService.findByEmail(email);
        return user.getPantryIngredients();
    }
}
