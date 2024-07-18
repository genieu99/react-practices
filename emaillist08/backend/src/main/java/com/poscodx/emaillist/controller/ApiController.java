package com.poscodx.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.emaillist.dto.JsonResult;
import com.poscodx.emaillist.repository.EmailListRepository;
import com.poscodx.emaillist.vo.EmailListVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ApiController {
	
	@Autowired
	private EmailListRepository emailListRepository;
	
	@GetMapping("/api")
    public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
        log.info("Request[GET /api]: " + keyword);
        
		return ResponseEntity
        		.status(HttpStatus.OK)
        		.body(JsonResult.success(emailListRepository.findAll(keyword)));
    }
	
	@PostMapping("/api")
    public ResponseEntity<JsonResult> create(@RequestBody EmailListVo vo) {
        log.info("Request[POST /api]: " + vo);
        
        emailListRepository.insert(vo);
        
		return ResponseEntity
        		.status(HttpStatus.OK)
        		.body(JsonResult.success(vo));
    }
}
