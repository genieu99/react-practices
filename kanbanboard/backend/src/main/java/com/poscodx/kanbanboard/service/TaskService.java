package com.poscodx.kanbanboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.TaskVo;

@Transactional
@Service
public class TaskService {
	
	 @Autowired
	 private TaskRepository taskRepository;

	public List<TaskVo> getTasks(Long cardNo) {
		return taskRepository.findByCardNo(cardNo);
	}

	public void addTask(TaskVo vo) {
		taskRepository.addTask(vo);
	}
	
	public TaskVo updateTask(Long taskNo, String done) {
		return taskRepository.updateTaskStatus(taskNo, done);
	}

	public void deleteTask(Long taskNo) {
		taskRepository.deleteTask(taskNo);
	}
}
