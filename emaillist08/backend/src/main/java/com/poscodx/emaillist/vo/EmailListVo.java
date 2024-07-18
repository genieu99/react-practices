package com.poscodx.emaillist.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class EmailListVo {
	private Long no;
	private String firstName;
	private String lastName;
	private String email;
}
