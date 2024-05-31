const express = require('express');
const upload = require('../services/uploadService');
const errorHandler = require('../exceptions/errorHandler');
const path = require('path');
const foodRoutes = require('../routes/foodRoutes');
const app = express();

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(express.json());

// Upload Endpoint
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.status(400).json({ message: err });
        } else {
            if(req.file == undefined){
                res.status(400).json({ message: 'No file selected!' });
            } else {
                res.status(200).json({
                    message: 'File uploaded!',
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    });
});

// Food Routes
app.use('/api/food', foodRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
