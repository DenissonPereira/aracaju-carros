package api.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.backend.models.Marcas;
import api.backend.repository.MarcasResitory;


@Service
public class MarcasService {

    @Autowired
    private MarcasResitory marcasResitory;

    public Marcas cadastrarMarca(Marcas marca) {
        if (marca.getNome() == null || marca.getNome().isEmpty()) {
            throw new IllegalArgumentException("Nome da marca é obrigatório!");
        }

        return marcasResitory.save(marca);
    }
    
}
