var images = [
  './images/g.png',
  './images/c.png',
  './images/p.png',
];

/* GET images. */
module.exports = function(req, res) {
  res.download(images[Math.floor(Math.random() * images.length)], 'image.png', function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
};
