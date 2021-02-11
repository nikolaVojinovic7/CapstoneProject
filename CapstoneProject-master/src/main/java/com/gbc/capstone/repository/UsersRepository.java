package com.gbc.capstone.repository;

import com.gbc.capstone.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends MongoRepository<Users, String>, UserRepositoryCustom{

    Users findByUsername(String username);
}
