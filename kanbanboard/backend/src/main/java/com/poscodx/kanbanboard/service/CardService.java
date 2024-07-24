package com.poscodx.kanbanboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.poscodx.kanbanboard.repository.CardRepository;
import com.poscodx.kanbanboard.vo.CardVo;

@Transactional
@Service
public class CardService {
	
	@Autowired
	public CardRepository cardRepository;
	
	public List<CardVo> findAll() {
        return cardRepository.findAll();
    }
}
