package com.capstone.project.controllers;

import com.capstone.project.exception.ResourceNotFoundException;
import com.capstone.project.model.Ingredient;
import com.capstone.project.model.Recipe;
import com.capstone.project.services.RecipeService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("api/recipe")
public class RecipeController {
    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }


    //get all recipes api
    @GetMapping("allRecipes")
    public Set<Recipe> allRecipes(){
        return this.recipeService.findAll();
    }

    //add ingredient to recipe
    @GetMapping("addIngredientToRecipe/{recipe}&{ingredient}")
    public Recipe addIngredientToRecipe(@PathVariable Ingredient ingredient, @PathVariable Recipe recipe){
         return this.recipeService.addIngredientToRecipe(ingredient, recipe);
    }

    // get recipe by id rest api
    @GetMapping("/getRecipe/{id}")
    public Recipe getRecipeById(@PathVariable Long id) {
        Recipe recipe = recipeService.findById(id);
        if(recipe == null){
            throw new ResourceNotFoundException("There is no recipe with id" + id);
        }
        return recipe;
    }

    // create recipe rest api
    @PostMapping("/createRecipe")
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeService.save(recipe);
    }

    // update employee rest api
    @PutMapping("/updateRecipe/{id}")
    public Recipe updateRecipe(@PathVariable Long id, @RequestBody Recipe recipeDetails) {

        Recipe recipe = recipeService.findById(id);
        if(recipe == null){
            throw new ResourceNotFoundException("There is no recipe with id" + id);
        }
        recipe.setCookTime(recipeDetails.getCookTime());
        recipe.setDirections(recipeDetails.getDirections());
        recipe.setImageUrl(recipeDetails.getImageUrl());
        recipe.setLevel(recipeDetails.getLevel());
        recipe.setPrepTime(recipeDetails.getPrepTime());
        recipe.setName(recipeDetails.getName());
        recipe.setServings(recipeDetails.getServings());
        recipe.setTotalTime(recipeDetails.getTotalTime());
        return recipeService.save(recipe);
    }

    // delete employee rest api
    @DeleteMapping("/deleteRecipe/{id}")
    public Map< String, Boolean > deleteRecipe(@PathVariable Long id) {
        Recipe recipe = recipeService.findById(id);
        if(recipe == null){
            throw new ResourceNotFoundException("There is no recipe with id" + id);
        }
        recipeService.delete(recipe);
        Map < String, Boolean > response = new HashMap< >();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
