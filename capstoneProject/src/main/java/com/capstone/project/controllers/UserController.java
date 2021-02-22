package com.capstone.project.controllers;

import com.capstone.project.exception.ResourceNotFoundException;
import com.capstone.project.model.User;
import com.capstone.project.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("api/public")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    //get all users api
    @GetMapping("allUsers")
    public Set<User> allUsers(){
        return this.userService.findAll();
    }

    // get user by email rest api
    @GetMapping("/users/{email}")
    public User getUserByEmail(@PathVariable String email) {
        User user = userService.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("There is no user with email" + email);
        }
        return user;
    }

    // get user by id rest api
    @GetMapping("/users/{username}")
    public User getUserByUsername(@PathVariable String username) {
        User user = userService.findByUsername(username);
        if(user == null){
            throw new ResourceNotFoundException("There is no user with username" + username);
        }
        return user;
    }

    // get user by id rest api
    @PostMapping("/login/{username}&{password}")
    public Boolean userLogin(@PathVariable String username, @PathVariable String password) {
        Boolean verifyLogin = userService.verifyLogin(username, password);
        return verifyLogin;
    }

    // create user rest api
    @PostMapping("/createUser")
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    // update employee rest api
    @PutMapping("/updateUser/{username}")
    public User updateUser(@PathVariable String username, @RequestBody User userDetails) {

        User user = userService.findByUsername(username);
        if(user == null){
            throw new ResourceNotFoundException("There is no user with username" + username);
        }
        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        return userService.save(user);
    }

    // delete employee rest api
    @DeleteMapping("/deleteUser/{username}")
    public Map< String, Boolean > deleteUser(@PathVariable String username) {
        User user = userService.findByUsername(username);
        if(user == null){
            throw new ResourceNotFoundException("There is no user with username" + username);
        }
        userService.delete(user);
        Map < String, Boolean > response = new HashMap< >();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
