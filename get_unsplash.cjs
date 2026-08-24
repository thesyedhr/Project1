const https = require('https');

function searchUnsplash(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"&?]*/g);
        if (matches && matches.length > 0) {
          // get a unique URL with proper formatting
          let url = matches.find(m => !m.includes('profile')) || matches[0];
          url = url.split('?')[0] + '?auto=format&fit=crop&q=80&w=800';
          resolve(url);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Rouge:', await searchUnsplash('red wheat field sunset'));
  console.log('Einkorn:', await searchUnsplash('ancient grain einkorn'));
  console.log('Rye:', await searchUnsplash('dark rye grain'));
  console.log('Flour:', await searchUnsplash('fine white flour baking'));
}
run();
