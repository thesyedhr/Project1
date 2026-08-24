const https = require('https');

function searchWiki(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&utf8=&format=json`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const json = JSON.parse(data);
        if (json.query && json.query.search && json.query.search.length > 0) {
          const title = json.query.search[0].title;
          https.get(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`, (res2) => {
             let data2 = '';
             res2.on('data', chunk => data2 += chunk);
             res2.on('end', () => {
                const json2 = JSON.parse(data2);
                const pages = json2.query.pages;
                const pageId = Object.keys(pages)[0];
                if (pages[pageId].imageinfo && pages[pageId].imageinfo.length > 0) {
                    resolve(pages[pageId].imageinfo[0].url);
                } else resolve(null);
             });
          });
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Rouge:', await searchWiki('red wheat field sunset filetype:bitmap'));
  console.log('Einkorn:', await searchWiki('einkorn grain filetype:bitmap'));
  console.log('Rye:', await searchWiki('secale cereale ear dark filetype:bitmap'));
  console.log('Flour:', await searchWiki('baking flour kitchen filetype:bitmap'));
}
run();
