package com.example.zencloud.Service;

import com.example.zencloud.Model.Form;
import com.example.zencloud.Repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormService {
    private final FormRepository formRepository;

    @Autowired
    public FormService(FormRepository formRepository) {
        this.formRepository = formRepository;
    }

    public Form submitForm(Form form) {
        return formRepository.save(form);
    }

    public List<Form> getAllForms() {
        return formRepository.findAll();
    }

    public Form getFormById(Long id) {
        Optional<Form> formOptional = formRepository.findById(id);
        return formOptional.orElse(null);
    }

    public Form updateForm(Long id, Form updatedForm) {
        Optional<Form> formOptional = formRepository.findById(id);
        if (formOptional.isPresent()) {
            Form existingForm = formOptional.get();
            existingForm.setName(updatedForm.getName());
            existingForm.setEmail(updatedForm.getEmail());
            // Update other fields similarly
            return formRepository.save(existingForm);
        }
        return null; // Return null if form with the given ID is not found
    }
}
