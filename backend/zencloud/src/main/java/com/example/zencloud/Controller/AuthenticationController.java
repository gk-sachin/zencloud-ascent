package com.example.zencloud.Controller;

<<<<<<< HEAD
import java.util.HashMap;

=======
>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.zencloud.Dto.request.AuthenticationRequest;
import com.example.zencloud.Dto.request.RegisterRequest;
import com.example.zencloud.Dto.response.AuthenticationResponse;
import com.example.zencloud.Service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

<<<<<<< HEAD
   @PostMapping("/authenticate")
    public ResponseEntity<HashMap<String, Object>> authenticate(@RequestBody AuthenticationRequest request) {
        return (authenticationService.authenticate(request));
}
=======
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b
}
