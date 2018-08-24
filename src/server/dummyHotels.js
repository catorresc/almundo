const Hotel = require("./models/hotels.model");
const path = require('path');
const fs = require('fs');


module.exports.dummyData = () => {

    Hotel.countDocuments(( err, count) => {

        console.log('::: Registros Almundo | Hotels:',count);
        if (count > 0) {return;}

        const pathDummyData = path.join(__dirname, 'data-dummy.json');
        const contentDummy = fs.readFileSync(pathDummyData);
        var jsonContent = JSON.parse(contentDummy);

        const aryHotelsDummy = [];
        for(let i = 0; i < jsonContent.length ; i++){
            aryHotelsDummy.push({
                'uid': jsonContent[i].id,
                'name':jsonContent[i].name,
                'price': jsonContent[i].price,
                'image': jsonContent[i].image,
                'stars': jsonContent[i].stars,
                'amenities': jsonContent[i].amenities
            })
        }

        Hotel.insertMany(aryHotelsDummy, function(err,response) {
            console.log('response',response)
        }); 
    });
}
