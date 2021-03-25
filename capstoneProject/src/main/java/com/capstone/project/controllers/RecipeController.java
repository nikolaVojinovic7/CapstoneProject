package com.capstone.project.controllers;

import com.capstone.project.exception.ResourceNotFoundException;
import com.capstone.project.model.*;
import com.capstone.project.services.IngredientService;
import com.capstone.project.services.RecipeService;
import com.capstone.project.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("api/recipe")
public class RecipeController {
    private final RecipeService recipeService;
    private final IngredientService ingredientService;
    private final UserService userService;

    public RecipeController(RecipeService recipeService, IngredientService ingredientService, UserService userService) {
        this.recipeService = recipeService;
        this.ingredientService = ingredientService;
        this.userService = userService;
    }


    //get all recipes api
    @GetMapping("allRecipes")
    public Set<Recipe> allRecipes(){
        return this.recipeService.findAll();
    }

    //add ingredient to recipe
    @GetMapping("addIngredientToRecipe/{recipe}&{ingredient}")
    public Recipe addIngredientToRecipe(@PathVariable RecipeToIngredient ingredient, @PathVariable Recipe recipe){
         return this.recipeService.addIngredientToRecipe(ingredient, recipe);
    }

    //tie ingredient to recipe and add the weights and measurements
    @PutMapping("/tieIngredientToRecipe/{recipeId}&{ingredientId}")
    public Recipe updateRecipe(@RequestBody RecipeToIngredient ingredientRecipe, @PathVariable long ingredientId, @PathVariable long recipeId) {

        Recipe recipe = recipeService.findById(recipeId);
        if(recipe == null){
            throw new ResourceNotFoundException("There is no recipe with id" + recipeId);
        }
        Ingredient ingredient = ingredientService.findById(ingredientId);
        if(ingredient == null){
            throw new ResourceNotFoundException("There is no ingredient with id" + ingredientId);
        }
        ingredientRecipe.setIngredient(ingredient);
        recipe.addIngredientItem(ingredientRecipe);
        return recipeService.save(recipe);
    }

    //get all pantry ingredients by email api
    @GetMapping("searchRecipeByPantry/{email}")
    public Set<Recipe> searchRecipeByPantry(@PathVariable String email){
        Set<Recipe> recipeSet = recipeService.findAll();
        User user = userService.findByEmail(email);
        Set<Pantry> pantrySet = user.getPantryIngredients();
        Set<Recipe> finalRecipeSet = new HashSet<>();
        ArrayList<String> ingredientArray = new ArrayList<String>();
        ArrayList<String> pantryArray = new ArrayList<String>();

        for (Pantry pantry:pantrySet) {
            String name = pantry.getIngredient().getName();
            System.out.println("Pantry: " + name);
            pantryArray.add(name);
        }
        Collections.sort(pantryArray);

        for (Recipe recipe:recipeSet) {
            Set<RecipeToIngredient> recipeToIngredients = recipe.getRecipeToIngredients();

            for (RecipeToIngredient recipeIngredient:recipeToIngredients) {
                String ingredientName = recipeIngredient.getIngredient().getName();
                ingredientArray.add(ingredientName);
                System.out.println("Ingredient: " + ingredientName);
            }
            Collections.sort(ingredientArray);
            if(ingredientArray.equals(pantryArray)){
                finalRecipeSet.add(recipe);
            }
            ingredientArray.clear();
        }



        return finalRecipeSet;
    }


   /* //get all pantry ingredients by email api
    @GetMapping("searchRecipeByPantry/{email}&{title}&{category}")
    public Set<Recipe> searchRecipeByPantryCategory(@PathVariable String email,
                                                    @PathVariable String title, @PathVariable String category){
        Set<Recipe> recipeSet = recipeService.findAll();
        User user = userService.findByEmail(email);
        Set<Pantry> pantrySet = user.getPantryIngredients();
        Set<Recipe> finalRecipeSet = new HashSet<>();
        Boolean ingredientsPresent = false;
        System.out.println(ingredientsPresent);

        for (Recipe recipe:recipeSet) {
            Set<RecipeToIngredient> recipeToIngredients = recipe.getRecipeToIngredients();

            for (RecipeToIngredient recipeIngredient:recipeToIngredients) {
                String ingredientName = recipeIngredient.getIngredient().getName();

                for (Pantry pantry:pantrySet) {
                    String name = pantry.getIngredient().getName();
                    if(name.equals(ingredientName)){
                        ingredientsPresent = true;
                    }
                    else{
                        ingredientsPresent = false;
                        break;
                    }

                }

                if(ingredientsPresent){
                    finalRecipeSet.add(recipe);
                }
            }
        }
        


        return finalRecipeSet;
    }*/


    //get all pantry ingredients by email api
    @GetMapping("allRecipeToIngredient/{recipeId}")
    public Set<RecipeToIngredient> allIngredientsLinked(@PathVariable long recipeId){
        Recipe recipe = recipeService.findById(recipeId);
        return recipe.getRecipeToIngredients();
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

    // get recipe by name/title rest api
    @GetMapping("/getRecipeByName/{name}")
    public Recipe getRecipeByName(@PathVariable String name) {
        Recipe recipe = recipeService.findByName(name);
        if(recipe == null){
            throw new ResourceNotFoundException("There is no recipe with name" + name);
        }
        return recipe;
    }

    // get set of recipe by name/title rest api
    @GetMapping("/getSetRecipeByName/{name}")
    public Set<Recipe> getAllRecipeByName(@PathVariable String name) {
        Set<Recipe> recipes = recipeService.findAllByName(name);
        if(recipes == null){
            throw new ResourceNotFoundException("There are no recipes with name" + name);
        }
        return recipes;
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
