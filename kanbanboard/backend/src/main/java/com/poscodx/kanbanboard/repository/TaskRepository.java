package com.poscodx.kanbanboard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class TaskRepository {
	
	@Autowired
	private SqlSession sqlSession;

	public List<TaskVo> findByCardNo(Long cardNo) {
		return sqlSession.selectList("task.findByCardNo", cardNo);
	}
	

	public void addTask(TaskVo vo) {
		sqlSession.insert("task.addTask", vo);
	}

	public TaskVo updateTaskStatus(Long taskNo, String done) {
		sqlSession.update("task.updateTaskStatus", Map.of("taskNo", taskNo, "done", done));
		return sqlSession.selectOne("task.findByTaskNo", taskNo);
	}

	public void deleteTask(Long taskNo) {
		sqlSession.delete("task.deleteTask", taskNo);
	}
}
