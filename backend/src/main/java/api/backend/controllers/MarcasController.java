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

import api.backend.models.Marcas;
import api.backend.repository.MarcasResitory;
import api.backend.services.MarcasService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class MarcasController {
    
    @Autowired
    MarcasResitory marcasResitory;
    MarcasService marcasService;

    @GetMapping("/marcas")
    public List<Marcas> getAllMarcas() {
        return marcasResitory.findAll();
    }

    @GetMapping("/marcas/{id}")
    public ResponseEntity<?> getMarcasById(@PathVariable Long id) {

        Optional <Marcas> optionalMarca = marcasResitory.findById(id);
        
        if (optionalMarca.isPresent()) {
            return ResponseEntity.ok(optionalMarca.get());
        }

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Marca não encontrada!");
    }

    @PostMapping("/marcas")
    public ResponseEntity<?> createMarca(@RequestBody Marcas marca) {
        if (marca == null) {
            return ResponseEntity.badRequest().body("Sem dados!");
        }

        Marcas marcaSalva = marcasService.cadastrarMarca(marca);

        return ResponseEntity.ok(marcaSalva);

    }

    @PutMapping("/marcas/{id}")
    public ResponseEntity<?> editMarca(@PathVariable Long id, @RequestBody Marcas marcaAtualizada) {

        Optional<Marcas> optionalMarca = marcasResitory.findById(id);
        if (optionalMarca.isPresent()) {

            Marcas marcaExistente = optionalMarca.get();

            marcaExistente.setId(marcaAtualizada.getId());
            marcaExistente.setNome(marcaAtualizada.getNome());
            marcaExistente.setQuantidade(marcaAtualizada.getQuantidade());
            marcaExistente.setImagem(marcaAtualizada.getImagem());

            Marcas marcaSalvaAtualizada = marcasResitory.save(marcaExistente);

            return ResponseEntity.ok(marcaSalvaAtualizada);
        }

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Erro ao atualizar marca!");
    }

    @DeleteMapping("/marcas/{id}")
    public ResponseEntity<?> deleteMarca(@PathVariable Long id) {
        Optional<Marcas> optionalMarca = marcasResitory.findById(id);

        if (optionalMarca.isPresent()) {
            marcasResitory.deleteById(id);

            return ResponseEntity.ok().body("Marca deletada com sucesso!");
        }

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Marca não encontrada");
    }
}
