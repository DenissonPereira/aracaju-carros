package api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import api.backend.models.Modelos;

public interface ModelosRepository extends JpaRepository<Modelos, Long>{
    
}
