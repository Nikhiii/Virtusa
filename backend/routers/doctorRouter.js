const express = require('express');
const doctorContoller = require('../controllers/doctorController');
const userController = require('../controllers/userController');
const {validateToken} = require('../authUtils');
const router = express.Router();

//AddDoctor
router.post('/doctor', doctorContoller.addDoctor);
//GetAllDoctors
router.post('/doctor', doctorContoller.getAllDoctors);
//Get a particular doctor
router.get('/doctor/:doctorId', doctorContoller.getDoctorById);
router.post('/doctor/user/:userId', doctorContoller.getDoctorByUserId);
//Edit doctor
router.put('/doctor/:doctorId', doctorContoller.updateDoctor);
//Delete doctor
router.delete('/doctor/:doctorId', doctorContoller.deleteDoctor);

router.get('/users',userController.getAllUsers);


module.exports = router;