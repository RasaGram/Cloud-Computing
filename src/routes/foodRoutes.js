const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const upload = require('../services/uploadService');

router.get('/instructions', foodController.viewCookingInstructions);
router.get('/food-names', foodController.viewIndonesianFoodNames);
router.get('/detected-ingredients', foodController.viewDetectedFoodIngredients);
router.post('/scan-food', upload, foodController.scanFoodFromCamera);

module.exports = router;
