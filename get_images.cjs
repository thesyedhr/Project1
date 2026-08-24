const https = require('https');

function searchPexels(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://www.pexels.com/search/${encodeURIComponent(query)}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(/https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg/g);
        if (matches && matches.length > 0) {
          resolve(matches[0]);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const q1 = await searchPexels('wheat harvest field');
  const q2 = await searchPexels('grains seeds rustic');
  const q3 = await searchPexels('rye bread dark');
  const q4 = await searchPexels('white flour baking');
  console.log('Rouge:', q1);
  console.log('Einkorn:', q2);
  console.log('Rye:', q3);
  console.log('Flour:', q4);
}
run();
