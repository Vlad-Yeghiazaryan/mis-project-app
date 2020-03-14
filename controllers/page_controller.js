async function indexPageControl (req, res, next) {
  // Rendering index
  res.render('index', {
    title: 'Info'
  })
}

module.exports = {
  indexPageControl
}
