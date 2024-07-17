package com.poscodx.tabbox.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class LandingController {
	
	@GetMapping
	public String index() {
		return "index";
	}
}