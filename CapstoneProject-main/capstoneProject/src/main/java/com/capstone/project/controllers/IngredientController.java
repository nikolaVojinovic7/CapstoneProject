package com.capstone.project.controllers;

import com.capstone.project.exception.ResourceNotFoundException;
import com.capstone.project.model.Ingredient;
import com.capstone.project.model.User;
import com.capstone.project.services.IngredientService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("api/ingredient")
public class IngredientController {

    private final IngredientService ingredientService;

    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }


    //get all users api
    @GetMapping("allIngredients")
    public Set<Ingredient> allIngredients(){
        return this.ingredientService.findAll();
    }

    // get user by id rest api
    @GetMapping("/findIngredient/{name}")
    public Ingredient getIngredientByName(@PathVariable String name) {
        Ingredient ingredient = ingredientService.findByName(name);
        if(ingredient == null){
            throw new ResourceNotFoundException("There is no ingredient with name" + name);
        }
        return ingredient;
    }

    // create user rest api
    @PostMapping("/createIngredient")
    public Ingredient createIngredient(@RequestBody Ingredient ingredient) {
        return ingredientService.save(ingredient);
    }

    // update employee rest api
    @PutMapping("/updateIngredient/{name}")
    public Ingredient updateIngredient(@PathVariable String name, @RequestBody Ingredient ingredientDetails) {

        Ingredient ingredient = ingredientService.findByName(name);
        if(ingredient == null){
            throw new ResourceNotFoundException("There is no ingredient with name" + name);
        }
        ingredient.setName(ingredientDetails.getName());
        ingredient.setCategory(ingredientDetails.getCategory());
        return ingredientService.save(ingredient);
    }

    // delete employee rest api
    @DeleteMapping("/deleteIngredient/{name}")
    public Map< String, Boolean > deleteIngredient(@PathVariable String name) {
        Ingredient ingredient = ingredientService.findByName(name);
        if(ingredient == null){
            throw new ResourceNotFoundException("There is no ingredient with name" + name);
        }
        ingredientService.delete(ingredient);
        Map < String, Boolean > response = new HashMap< >();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
