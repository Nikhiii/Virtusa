const express = require('express');
const employeeController = require('../controllers/employeeController');
const userController = require('../controllers/userController');
const {validateToken} = require('../authUtil');
const router = express.Router();

  // Get all Employee Details
  router.get('/employee', employeeController.getAllEmployees);
  
  // Get a particular Employee Details
  router.get('/employee/user/:employeeid', employeeController.getEmployeeById);
  
  // Employee Registration
  router.post('/employee', employeeController.registerEmployee);
  
  // Edit Employee Details
  router.put('/employee/:employeeid', employeeController.editEmployee);
  
  // Delete Employee Details
  router.delete('/employee/:employeeid', employeeController.deleteEmployee);

  router.get('/users', userController.getAllUsers);

  
module.exports = router;
