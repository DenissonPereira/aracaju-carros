package api.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.backend.models.Usuarios;
import api.backend.repository.UsuariosRepository;

@Service
public class UsuariosServices {
    
    @Autowired
    private UsuariosRepository usuariosRepository;

    public Usuarios cadastrarUsuario(Usuarios usuario) {

        if (usuario.getEmail() == null || usuario.getEmail().isEmpty()) {
            throw new IllegalArgumentException("E-mail é obrigatório!");
        }

        if (usuario.getNome() == null || usuario.getSenha().isEmpty()) {
            throw new IllegalArgumentException("A senha do usuário é orbigatória!");
        }


        return usuariosRepository.save(usuario);
    }
}
