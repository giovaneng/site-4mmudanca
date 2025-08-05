package _mmudanca.backend.dto;

public class Form2dto {
    private String nome;
    private String email;
    private String celular;
    private String assunto;
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
    public String getAssunto(){
        return assunto;
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
    public void setCelular(String celular) {
        this.celular = celular;
    }
    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }
    public void setMensagem(String mensagem){
        this.mensagem = mensagem;
    }
}
