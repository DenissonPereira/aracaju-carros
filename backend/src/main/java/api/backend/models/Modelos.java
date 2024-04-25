package api.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "modelos")
public class Modelos {
    
    @Id
    @GeneratedValue
    private Long id;
    private String modelo;

    public Modelos() {

    }

    public Modelos(String modelo) {
        this.modelo = modelo;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
}
