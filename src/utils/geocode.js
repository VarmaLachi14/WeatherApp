const request = require('request')

const geoCode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoidmFybWExNCIsImEiOiJja3FlazJhOTYxZ3RuMnZvdmR4YXFlM3NmIn0.t_c5JYP9pzx8TkLpLrpORg&limit=1'

    request({url, json : true},(error, {body})=>{
        if(error){
            callback('Unable to Connect to Location Services',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find Location',undefined)
        }else{
            callback(undefined,{
                latitude : body.features[0].center[0],
                longitude : body.features[0].center[1]
            })
        }
    })
}

module.exports = geoCode