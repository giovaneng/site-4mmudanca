package _mmudanca.backend.dto;

public class Form1dto {
    private String nome;
    private String email;
    private String celular;
    private String mensagem;

    public String getNome(){
        return nome;
    }
    public String getEmail(){
        return email;
    }
    public String getCelular(){
        return celular;
    }
    public String getMensagem(){
        return mensagem;
    }
    public void setNome(String nome){
        this.nome = nome;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setCelular(String celular){
        this.celular = celular;
    }
    public void setDescricao(String descricao){
        this.mensagem = descricao;
    }
}

