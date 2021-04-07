package com.capstone.project.controllers;

import com.capstone.project.exception.ResourceNotFoundException;
import com.capstone.project.model.User;
import com.capstone.project.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("api/admin")
public class AdminController {

    private final UserService userService;

    public AdminController(UserService userService){
        this.userService = userService;
    }

    //get all users api
    @GetMapping("allUsers")
    public Set<User> allUsers(){
        return this.userService.findAll();
    }

    // update employee rest api
    @PutMapping("/banUser/{email}")
    public User updateUser(@PathVariable String email) {

        User user = userService.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("There is no user with username" + email);
        }
        user.setStatus("banned");
        return userService.save(user);
    }
}
