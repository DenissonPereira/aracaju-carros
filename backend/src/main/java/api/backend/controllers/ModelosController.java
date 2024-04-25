package api.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import api.backend.models.Modelos;
import api.backend.repository.ModelosRepository;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class ModelosController {

    @Autowired
    ModelosRepository modelosRepository;

    @GetMapping("/modelos")
    public List<Modelos> getAllModelos() {
        return modelosRepository.findAll();
    }

    @GetMapping("/modelos/{id}")
    public ResponseEntity<?> getModeloById(@PathVariable Long id) {
        Optional<Modelos> optionalModelos = modelosRepository.findById(id);

        if (optionalModelos.isPresent()) {
            return ResponseEntity.ok(optionalModelos.get());
        }

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Modelo não encontrado!");
    }
}
