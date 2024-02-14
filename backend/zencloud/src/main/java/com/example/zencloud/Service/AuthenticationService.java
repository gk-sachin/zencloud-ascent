package com.example.zencloud.Service;

<<<<<<< HEAD
import java.util.HashMap;

import org.springframework.http.ResponseEntity;
=======
>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.zencloud.Dto.request.AuthenticationRequest;
import com.example.zencloud.Dto.request.RegisterRequest;
import com.example.zencloud.Dto.response.AuthenticationResponse;
import com.example.zencloud.Model.Role;
import com.example.zencloud.Model.User;
import com.example.zencloud.Repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public AuthenticationResponse register(RegisterRequest request) {
                var user = User
                                .builder()
                                .name(request.getName())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .phone(request.getPhone())
                                .role(Role.USER)
<<<<<<< HEAD
                                
=======
>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b
                                .build();
                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }

<<<<<<< HEAD
        public ResponseEntity<HashMap<String, Object>> authenticate(AuthenticationRequest request) {
=======
        public AuthenticationResponse authenticate(AuthenticationRequest request) {
>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                var jwtToken = jwtService.generateToken(user);
<<<<<<< HEAD
                HashMap<String, Object> map = new HashMap<>();
                map.put("token", jwtToken);
                map.put("id", user.getId());
                return ResponseEntity.ok(map);
}
=======
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }
>>>>>>> 6eb12e75592dd817f2eb19326a89ffa11a39822b

}
