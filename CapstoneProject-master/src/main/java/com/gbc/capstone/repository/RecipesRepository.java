package com.gbc.capstone.repository;

import com.gbc.capstone.model.Recipes;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipesRepository extends MongoRepository<Recipes, String> {
}
