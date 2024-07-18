package com.poscodx.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.emaillist.vo.EmailListVo;

@Repository
public class EmailListRepository {
	
	@Autowired
	private SqlSession sqlSession;

	public List<EmailListVo> findAll(String keyword) {
		return sqlSession.selectList("emaillist.findAll", keyword);
	}

	public int insert(EmailListVo vo) {
		return sqlSession.insert("emaillist.insert", vo);
	}
	
	
}
