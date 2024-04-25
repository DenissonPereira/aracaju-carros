package api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import api.backend.models.Usuarios;
import api.backend.services.UsuariosServices;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class UsuariosController {
    
    @Autowired
    UsuariosServices usuariosServices;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> saveUser(@RequestBody Usuarios usuario) {
        if (usuario == null) {
            return ResponseEntity.badRequest().body("Sem dados!");
        }

        Usuarios usuarioSalvo = usuariosServices.cadastrarUsuario(usuario);

        return ResponseEntity.ok(usuarioSalvo);
    }
}
