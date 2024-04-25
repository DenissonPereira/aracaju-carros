package api.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "marcas")
public class Marcas {
    
    @Id
    @GeneratedValue
    private Long id;
    private String nome;
    private String quantidade;
    private String imagem;

    public Marcas() {
        
    }

    public Marcas(String nome, String quantidade, String imagem) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.imagem = imagem;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(String quantidade) {
        this.quantidade = quantidade;
    }
    public String getImagem() {
        return imagem;
    }
    public void setImagem(String imagem) {
        this.imagem = imagem;
    }


}
