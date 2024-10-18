package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Employee;

public interface EmployeeService {

    List<Employee> fetchAllEmployees();

    Employee findById(Long id);

    Employee createEmployee(Employee employee);

    Employee updateEmployee(Employee employee);

    String deleteEmployee(Long id);

}