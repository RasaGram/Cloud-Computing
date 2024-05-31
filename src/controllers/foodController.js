const path = require('path');

exports.viewCookingInstructions = (req, res) => {
    // Mock data
    const instructions = [
        { step: 1, instruction: "Panaskan minyak di wajan." },
        { step: 2, instruction: "Tumis bawang putih dan bawang merah hingga harum." },
        { step: 3, instruction: "Masukkan bahan lainnya dan masak hingga matang." }
    ];
    res.status(200).json(instructions);
};

exports.viewIndonesianFoodNames = (req, res) => {
    // Mock data
    const foodNames = ["Nasi Goreng", "Sate", "Rendang", "Gado-gado", "Bakso"];
    res.status(200).json(foodNames);
};

exports.viewDetectedFoodIngredients = (req, res) => {
    // Mock data
    const ingredients = ["Bawang putih", "Bawang merah", "Cabai", "Kecap", "Garam"];
    res.status(200).json(ingredients);
};

exports.scanFoodFromCamera = (req, res) => {
    const imageUrl = `uploads/${req.file.filename}`;
    // Mock data
    const detectedFood = {
        image: imageUrl,
        food: "Nasi Goreng",
        confidence: 0.95
    };
    res.status(200).json(detectedFood);
};
