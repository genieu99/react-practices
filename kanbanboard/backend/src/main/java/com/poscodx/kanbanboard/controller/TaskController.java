package com.poscodx.kanbanboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.service.TaskService;
import com.poscodx.kanbanboard.vo.TaskVo;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public JsonResult getTasks(@RequestParam(value = "no", required = true) Long cardNo) {
        return JsonResult.success(taskService.getTasks(cardNo));
    }

    @PostMapping
    public JsonResult create(@RequestBody TaskVo vo) {
        taskService.addTask(vo);
        return JsonResult.success(vo);
    }

    @PutMapping("/{no}")
    public JsonResult update(@PathVariable(value = "no") Long taskNo, String done) {
        TaskVo updateTask = taskService.updateTask(taskNo, done);
        return JsonResult.success(updateTask);
    }

    @DeleteMapping("/{no}")
    public JsonResult delete(@PathVariable(value = "no", required = true) Long taskNo) {
    	System.out.println(taskNo);
        taskService.deleteTask(taskNo);
        return JsonResult.success(taskNo);
    }
}