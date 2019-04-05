const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('Cats are cool.');
console.dir(result); // Score: -2, Comparative: -0.666
