const express = require('express');
const doctorContoller = require('../controllers/doctorController');
const {validateToken} = require('../authUtils');
const router = express.Router();

//AddDoctor
router.post('/doctor',validateToken, doctorContoller.addDoctor);
//GetAllDoctors
router.post('/doctor',validateToken, doctorContoller.getAllDoctors);
//Get a particular doctor
router.get('/doctor/:doctorId',validateToken, doctorContoller.getDoctorById);
router.post('/doctor/user/:userId',validateToken, doctorContoller.getDoctorByUserId);
//Edit doctor
router.put('/doctor/:doctorId',validateToken, doctorContoller.updateDoctor);
//Delete doctor
router.delete('/doctor/:doctorId',validateToken, doctorContoller.deleteDoctor);

router.get('/users' ,validateToken,userController.getAllUsers);


module.exports = router;