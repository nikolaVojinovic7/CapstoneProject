package com.gbc.capstone.repository;

import com.gbc.capstone.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<Users, String> {

    Users findByUsername(String username);
}
