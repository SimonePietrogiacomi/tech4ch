const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const xml2js = require('xml2js');
const mapData = require('../files/map-data');

const router = express.Router();

const getMapData = (req, res) => {
  res.json(mapData);
};

// const getMapDataJson = (req, res) => {
//   const filepath = path.join(__dirname, '../files/map-data.json');
//   fs.readFile(filepath, (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       res.json(JSON.stringify(data.toString()));
//     }
//   });
// };

// const parser = new xml2js.Parser({
//   explicitArray: false,
//   explicitRoot: false,
//   mergeAttrs: true
// });

// const getMapDataXml = (req, res) => {
//   const filepath = path.join(__dirname, '../files/map-data.xml');
//   fs.readFile(filepath, (err, xmlData) => {
//     if (err) {
//       console.error(err);
//     } else {
//       parser.parseStringPromise(xmlData)
//         .then((jsonData) => {
//           res.json(jsonData);
//         })
//         .catch((error) => {
//           console.error(error);
//           res.end();
//         });
//     }
//   });
// };

router.get('/map', getMapData);

module.exports = router;
