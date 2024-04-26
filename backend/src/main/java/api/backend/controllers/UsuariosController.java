package api.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import api.backend.models.Usuarios;
import api.backend.repository.UsuariosRepository;
import api.backend.services.UsuariosServices;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class UsuariosController {
    
    @Autowired
    UsuariosServices usuariosServices;
    UsuariosRepository usuariosRepository;

    @PostMapping("/usuarios")
    public ResponseEntity<?> saveUser(@RequestBody Usuarios usuario) {
        if (usuario == null) {
            return ResponseEntity.badRequest().body("Sem dados!");
        }

        Usuarios usuarioSalvo = usuariosServices.cadastrarUsuario(usuario);

        return ResponseEntity.ok(usuarioSalvo);
    }

    @GetMapping("/usuarios")
    public List<Usuarios> getAllUsers() {
        return usuariosRepository.findAll();
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<?> obterUserById(@PathVariable Long id) {

        Optional<Usuarios> optionalUser = usuariosRepository.findById(id);

        if (optionalUser.isPresent()) {
            return ResponseEntity.ok(optionalUser.get());
        }

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Usuário não encontrado!");
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<?> deletarUserById(@PathVariable Long id) {

        Optional<Usuarios> optionalUser = usuariosRepository.findById(id);

        if (optionalUser.isPresent()) {
            usuariosRepository.deleteById(id);
            return ResponseEntity.ok()
                    .body("Usuário deletado com sucesso!");
        }

        return ResponseEntity
            .status((HttpStatus.NOT_FOUND))
            .body("Usuário não encontrado!");

    }

    @PutMapping("/usuarios/{id}")
    public ResponseEntity<?> editUserById(@PathVariable Long id, @RequestBody Usuarios usuarioAtualizado) {
        
        Optional<Usuarios> optionalUser = usuariosRepository.findById(id);

        if (optionalUser.isPresent()) {
            
            Usuarios usuarioExistente = optionalUser.get();

            usuarioExistente.setId(usuarioAtualizado.getId());
            usuarioExistente.setContato(usuarioAtualizado.getContato());
            usuarioExistente.setCpf(usuarioAtualizado.getCpf());
            usuarioExistente.setEmail(usuarioAtualizado.getEmail());
            usuarioExistente.setEndereco(usuarioAtualizado.getEndereco());
            usuarioExistente.setFoto(usuarioAtualizado.getFoto());
            usuarioExistente.setNome(usuarioAtualizado.getNome());
            usuarioExistente.setSenha(usuarioAtualizado.getSenha());
            usuarioExistente.setSobrenome(usuarioAtualizado.getSobrenome());
            usuarioExistente.setTipo(usuarioAtualizado.getTipo());

            Usuarios usuarioAttSave = usuariosRepository.save(usuarioExistente);

            return ResponseEntity.ok(usuarioAttSave);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Erro ao atualizar usuário!");
    }
}
