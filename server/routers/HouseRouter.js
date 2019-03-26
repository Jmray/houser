const express = require('express');

const HouseRouter = express.Router();




HouseRouter.get('/', (req, res) => {
    req.db.get_houses().then( houses => {
        res.send(houses)
    }

    ).catch(err => {
        console.error(err)
    })
})

HouseRouter.post('/add', (req, res) => {
    const {
        propertyName,
        address,
        city,
        state,
        zip,
        imageUrl,
        mortgage,
        rent,
    } = req.body;
    req.db.create_house([propertyName, address, city, state, zip, imageUrl, mortgage, rent]).then(() => {

        res.status(200).send()
    })

})

HouseRouter.delete('/delete/:id', (req, res) => {
    req.db.delete_house([req.params.id]).then(() => {
        res.status(200).send();
    }).catch(err => {
        console.error(err)
    })
})


module.exports = HouseRouter;