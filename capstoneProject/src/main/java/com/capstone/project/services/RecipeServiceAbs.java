package com.capstone.project.services;
import com.capstone.project.model.Ingredient;
import com.capstone.project.model.Recipe;


public interface RecipeServiceAbs extends CrudService<Recipe, Long>{
    Recipe save(Recipe recipe);

    Recipe addIngredientToRecipe(Ingredient ingredient, Recipe recipe);
}
