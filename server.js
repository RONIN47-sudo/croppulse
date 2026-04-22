const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Sample data (mock)
const cropPrices = {
    wheat: [2100, 2200, 2300],
    rice: [1700, 1800, 1900],
    maize: [1600, 1700, 1800],
    barley: [1500, 1600, 1700],
    sugarcane: [2800, 3000, 3200]
};

// Home route
app.get('/', (req, res) => {
    res.send('CropPulse API is running');
});

// Price route
app.get('/price/:crop', (req, res) => {
    const crop = req.params.crop.toLowerCase();

    if (cropPrices[crop]) {
        const prices = cropPrices[crop];
const randomPrice = prices[Math.floor(Math.random() * prices.length)];

res.json({
    crop: crop,
    price: randomPrice
});
    } else {
        res.json({
            message: 'Crop not found'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});