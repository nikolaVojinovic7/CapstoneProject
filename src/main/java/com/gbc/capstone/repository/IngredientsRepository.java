package com.gbc.capstone.repository;

import com.gbc.capstone.model.Ingredients;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IngredientsRepository extends MongoRepository<Ingredients, String> {
}
