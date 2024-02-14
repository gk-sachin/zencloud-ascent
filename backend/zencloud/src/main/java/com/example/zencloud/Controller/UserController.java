package com.example.zencloud.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
=======
import org.springframework.web.bind.annotation.GetMapping;
>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

<<<<<<< HEAD
import com.example.zencloud.Model.Courses;
=======
>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b
import com.example.zencloud.Model.Role;
import com.example.zencloud.Repository.UserRepository;
import com.example.zencloud.Service.JwtService;
import com.example.zencloud.Service.UserService;
<<<<<<< HEAD
import java.util.List;
import com.example.zencloud.Model.Courses;
import com.example.zencloud.Model.User;

@RestController
@CrossOrigin(origins = "*")
=======

@RestController
>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<?> getAllUsers(@RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        if (isAdmin) {
            return ResponseEntity.ok().body(userRepository.findAll());
        }
        return ResponseEntity.status(403).body("Access Restricted");
    }
<<<<<<< HEAD
@GetMapping("/courses/{id}")
    public List<Courses> getCourseById(@PathVariable Long id) {
        User u = userRepository.findById(id).orElse(null);
        return u.getCourses();
}
=======

>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b
}
