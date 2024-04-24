package api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import api.backend.models.Usuarios;
import api.backend.repository.UsuariosRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class UsuariosController {
    
    @Autowired
    UsuariosRepository usuariosRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> saveUser(@RequestBody Usuarios usuario) {
        if (usuario == null) {
            return ResponseEntity.badRequest().body("Sem dados!");
        }

        return ResponseEntity.ok(usuariosRepository.save(usuario));
    }
}
