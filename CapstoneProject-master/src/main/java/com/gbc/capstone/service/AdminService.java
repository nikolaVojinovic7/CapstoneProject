package com.gbc.capstone.service;

import com.gbc.capstone.repository.UsersRepository;
import org.springframework.stereotype.Service;


@Service
public class AdminService {
    private final UsersRepository usersRepository;

    public AdminService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }
}
