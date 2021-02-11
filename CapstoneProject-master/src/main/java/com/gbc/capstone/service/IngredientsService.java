package com.gbc.capstone.service;

import com.gbc.capstone.repository.IngredientsRepository;
import org.springframework.stereotype.Service;

@Service
public class IngredientsService {

    private final IngredientsRepository ingredientsRepository;

    public IngredientsService(IngredientsRepository ingredientsRepository) {
        this.ingredientsRepository = ingredientsRepository;
    }
}
