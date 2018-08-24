const express = require('express');
const router = express.Router();
const Hotel = require("../models/hotels.model");

/* Get all Hotels */
router.get("/", (request, response, next) => {
	Hotel.find({ $text: { $search: "new" } })
	.then(hotels => {
        console.log(hotels);
        response.status(200).json(hotels).send(hotels.length);
    })
	.catch(err => {
		console.log(err);
		response.status(500).json({
			error: err
		});
	});
});

/* Get specific Hotel by ID */
router.get('/:id', (request, response) => {
    const id = request.params.id;
    Hotel.findById(id)
    .then(hotel => {
        if (hotel) {
            response.status(200).json(hotel);
        } else {
            response.status(404).json({ message: `Registro no encontrado con el ID ${id}` });
        }
    })
    .catch(err => {
        response.status(500).json({ error: err });
    });
});

/* Create new Hotel */
router.post('/', async(request, response) => {
    const { uid, name, price, image, stars, amenities } = request.body;
    const hotel = new Hotel({
        uid: uid,
        name: name,
        price: price,
        image: image,
        stars: stars,
        amenities: amenities
      });

    hotel.save()
    .then(result => {
        console.log(result);
        response.status(201).json({
            message: "::: Producto creado exitosamente ",
            createdProduct: result
        });
    })
    .catch(err => {
        console.log(err);
        response.status(500).json({
            error: err
        });
    });
});

/* Update Hotel by ID */
router.put('/:id', (request, response) => {
    const id = request.params.id
    const { uid, name, price, image, stars, amenities } = request.body;
    const updateHotel = {uid, name, price, image, stars, amenities};
    Hotel.findByIdAndUpdate(id, updateHotel)
    .then(result => {
        console.log(result);
        response.status(200).json({
            message: "::: Producto actualizado exitosamente "
        });
    })
    .catch(err => {
        console.log(err);
        response.status(500).json({
            error: err
        });
    });
});

/* Delete Hotel by ID */
router.delete('/:id', (request, response) => {
    const id = request.params.id
    Hotel.findByIdAndRemove(id)
    .then(result => {
        console.log(result);
        response.status(200).json({
            message: "::: Producto eliminado exitosamente "
        });
    })
    .catch(err => {
        console.log(err);
        response.status(500).json({
            error: err
        });
    });
});

module.exports = router;