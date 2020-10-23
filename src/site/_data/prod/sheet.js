const axios  = require('axios');
const seed   = require('../../../utils/save-seed.js');


// Once a googel sheet is "published to the web" we can access its JSON
// via a URL of this form. We just need to pass in the ID of the sheet
// which we can find in the URL of the document.
const sheetID = "1HpW7adgxIBxiXaf24TE5bHgmClPmIbEGMkbvjKuD_uA";
const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/${sheetID}/ob3uqk0/public/values?alt=json`;

module.exports = () => {
  return new Promise((resolve, reject) => {

    console.log(`Requesting data from ${googleSheetUrl}`);

    axios.get(googleSheetUrl)
      .then(response => {

        // massage the data from the Google Sheets API into
        // a shape that will more convenient for us in our SSG.
        var data = {
          "content": []
        };

        response.data.feed.entry.forEach(item => {
          data.content.push({
            "name": item.gsx$name.$t,
            "location": item.gsx$location.$t,
            "phonenumber": item.gsx$phonenumber.$t,
            "twitterhandle": item.gsx$twitterhandle.$t,
            "instagramhandle": item.gsx$instagramhandle.$t,
            "facebookhandle": item.gsx$facebookhandle.$t
          })
        });

        // stash the data locally for developing without
        // needing to hit the API each time.
        seed(JSON.stringify(data), `${__dirname}/../dev/sheet.json`);

        // resolve the promise and return the data
        resolve(data);

      })

      // uh-oh. Handle any errrors we might encounter
      .catch(error => {
        console.log('Error :', error);
        reject(error);
      });
  })
}
