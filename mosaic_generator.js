var mng = require('mosaic-node-generator');

const generateMosaic = (file_name) => {
    console.log('file_name in generate: ', file_name)
    mng.mosaic(
        file_name,
        'images',
        30,
        30,
        100,
        100,
        null,
        'thumbnails',
        true
    ); 
}

module.exports = generateMosaic;
