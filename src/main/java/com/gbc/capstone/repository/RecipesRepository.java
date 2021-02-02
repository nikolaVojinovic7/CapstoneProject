package com.gbc.capstone.repository;

import com.gbc.capstone.model.Recipes;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipesRepository extends MongoRepository<Recipes, String> {
}
