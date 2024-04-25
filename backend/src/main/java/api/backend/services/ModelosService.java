package api.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.backend.models.Modelos;
import api.backend.repository.ModelosRepository;

@Service
public class ModelosService {
    
    @Autowired
    ModelosRepository modelosRepository;

    public Modelos cadastrarModelo(Modelos modelo) {
        
        if (modelo.getModelo() == null || modelo.getModelo().isEmpty()) {
            throw new IllegalArgumentException("Modelo é obrigatório!");
        }

        return modelosRepository.save(modelo);
    }
}
