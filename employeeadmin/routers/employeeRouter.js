const express = require('express');
const employeeController = require('../controllers/employeeController');
const userController = require('../controllers/userController');
const {validateToken} = require('../authUtil');
const router = express.Router();

  // Get all Employee Details
  router.get('/employee',validateToken, employeeController.getAllEmployees);
  
  // Get a particular Employee Details
  router.get('/employee/user/:userid',validateToken, employeeController.getEmployeeById);
  
  // Employee Registration
  router.post('/employee',validateToken, employeeController.registerEmployee);
  
  // Edit Employee Details
  router.put('/employee/:employeeid',validateToken, employeeController.editEmployee);
  
  // Delete Employee Details
  router.delete('/employee/:employeeid',validateToken, employeeController.deleteEmployee);

  router.get('/users',validateToken,userController.getAllUsers);

  
module.exports = router;
  