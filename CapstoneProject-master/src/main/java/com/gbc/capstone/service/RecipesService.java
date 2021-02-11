package com.gbc.capstone.service;

import com.gbc.capstone.repository.RecipesRepository;
import org.springframework.stereotype.Service;


@Service
public class RecipesService {

    private final RecipesRepository recipesRepository;

    public RecipesService(RecipesRepository recipesRepository) {
        this.recipesRepository = recipesRepository;
    }


}
