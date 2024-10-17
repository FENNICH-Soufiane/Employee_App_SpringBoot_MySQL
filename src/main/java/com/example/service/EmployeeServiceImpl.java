package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Employee;
import com.example.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public List<Employee> fetchAllEmployees() {        
        return (List<Employee>) employeeRepository.findAll();
    }


    @Override
    public Employee findById(Long id) {
        return employeeRepository.findById(id).get();
    }


    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }


    @Override
    public Employee updateEmployee(Employee employee) {
        Employee empObj = employeeRepository.findById(employee.getId()).get();
        if(empObj != null) {
            empObj.setEmail(employee.getEmail());
            empObj.setName(employee.getName());
            empObj.setSalary(employee.getSalary());
        }
        return employeeRepository.save(employee);
    }
    
}