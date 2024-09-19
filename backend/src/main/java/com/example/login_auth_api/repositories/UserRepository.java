package main.java.com.example.login_auth_api.repositories;

import main.java.com.example.login_auth_api.domain.user.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
