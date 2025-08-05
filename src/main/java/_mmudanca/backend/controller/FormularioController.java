package _mmudanca.backend.controller;

import _mmudanca.backend.dto.Form1dto;
import _mmudanca.backend.dto.Form2dto;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import _mmudanca.backend.service.EmailService;

@RestController
@RequestMapping("/api/formulario")
@CrossOrigin(origins = "*")
public class FormularioController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/form1")
    public String receberForm1(@RequestBody Form1dto dto) throws MessagingException {
        String corpo = "Nome: " + dto.getNome() + "<br>" +
                "Email: " + dto.getEmail() + "<br>" +
                "Celular: " + dto.getCelular() + "<br>" +
                "Mensagem: " + dto.getMensagem();

        emailService.enviarEmail("Nova mudanca/Cliente", corpo, "site4mmudancas@gmail.com");
        return "Formulario enviado com sucesso!!";
    }

    @PostMapping("/form2")
    public String receberForm2(@RequestBody Form2dto dto) throws MessagingException {
        String corpo = "Nome: " + dto.getNome() + "<br>" +
                "Email: " + dto.getEmail() + "<br>" +
                "Celular: " + dto.getCelular() + "<br>" +
                "Assunto: " + dto.getAssunto() + "<br>" +
                "Mensagem: " + dto.getMensagem();

        emailService.enviarEmail(dto.getAssunto(), corpo, "site4mmudancas@gmail.com");
        return "Formulario enviado com sucesso!!";
    }
}


