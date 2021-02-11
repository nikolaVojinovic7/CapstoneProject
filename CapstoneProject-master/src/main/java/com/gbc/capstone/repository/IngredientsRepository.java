package com.gbc.capstone.repository;

import com.gbc.capstone.model.Ingredients;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientsRepository extends MongoRepository<Ingredients, String> {
}
