package com.internship.sep.services;

import com.internship.sep.mapper.Mapper;
import com.internship.sep.models.EventCategory;
import com.internship.sep.repositories.EventCategoryRepository;
import com.internship.sep.web.EventCategoryDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class EventCategoryService {
    private final EventCategoryRepository repository;
    private final Mapper<EventCategory, EventCategoryDTO> mapper;

    @Transactional(readOnly = true)
    public List<String> getCategories() {
        return repository.findAll()
                .stream()
                .map(EventCategory::getName)
                .collect(Collectors.toList());
    }

    @Transactional
    public void addCategory(EventCategoryDTO dto) {
        repository.save(mapper.unmap(dto));
    }

    @Transactional
    public void updateCategory(EventCategoryDTO dto) {
        EventCategory eventCategory = repository.getById(dto.getId());
        eventCategory.setName(dto.getName());
    }

    @Transactional
    public void deleteCategory(Long id) {
        repository.deleteById(id);
    }
}
