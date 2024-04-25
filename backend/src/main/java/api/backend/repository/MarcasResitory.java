package api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import api.backend.models.Marcas;

public interface MarcasResitory extends JpaRepository<Marcas, Long> {
    
}
