package com.example.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.entity.Employee;
import com.example.service.EmployeeService;

public class EmployeeController {
    
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/api/v1/employees")
    public ResponseEntity<List<Employee>> fetchAllEmployees() {
        return ResponseEntity.ok(employeeService.fetchAllEmployees());
    }

}