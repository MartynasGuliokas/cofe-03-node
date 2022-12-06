const express = require("express");
const cors = require("cors")
const app = express(); // app yra express instance
const port = 3000;

app.use(cors());

// req - request - tai yra duomenysy kuriuos paduoda kvieciantysis pvz. POST user duomenys ar validacijos raktas
// res - response - duomenys kuriuos grazinam kai kviecia musu API keliu "/"
// pirmas argumentas - kelias i musu API

const cars = ["BMW", "Porche", "VW"];

app.get("/", (req, res) => {
    res.send(cars);
});

app.listen(port, () => {
    console.log(`Server is running on the ${port} port`)
});