package api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import api.backend.models.Usuarios;

public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {
    
}
