package com.poscodx.kanbanboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.repository.CardRepository;
import com.poscodx.kanbanboard.vo.CardVo;

@RestController
@RequestMapping("/api")
public class CardController {
	
	@Autowired
    private CardRepository cardRepository;

    @GetMapping("/card")
    public List<CardVo> findAll() {
    	return cardRepository.findAll();
    }
}
