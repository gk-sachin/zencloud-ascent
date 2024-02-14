package com.example.zencloud.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.zencloud.Model.Form;
import com.example.zencloud.Service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class FormController {
    private final FormService formService;

    @Autowired
    public FormController(FormService formService) {
        this.formService = formService;
    }

    @PostMapping("/submitForm")
    public Form submitForm(@RequestBody Form form) {
        return formService.submitForm(form);
    }

    @GetMapping("/forms")
    public List<Form> getAllForms() {
        return formService.getAllForms();
    }

    @GetMapping("/forms/{id}")
    public Form getFormById(@PathVariable Long id) {
        return formService.getFormById(id);
    }

    @PutMapping("/forms/{id}")
    public Form updateForm(@PathVariable Long id, @RequestBody Form updatedForm) {
        return formService.updateForm(id, updatedForm);
    }
}
