const express = require('express');
const medicineContoller = require('../controllers/medicineController');
const {validateToken} = require('../authUtils');
const router = express.Router();

    //add medicine
    router.post('/medicine', medicineContoller.addMedicine);

    //getall medicine
    router.get('/medicine', medicineContoller.getAllMedicines);

    //get a particular medicine Id
    router.get('/medicine/:medicineId', medicineContoller.getMedicineById);
    router.get('/medicine/user/:userId', medicineContoller.getMedicineByUserId);

    //edit medicine details
    router.put('/medicine/:medicineId', medicineContoller.updateMedicine);

    //delete medicine details
    router.delete('/medicine/:medicineId', medicineContoller.deleteMedicine);
    
    router.get('/users', userController.getAllUsers);


module.exports = router;