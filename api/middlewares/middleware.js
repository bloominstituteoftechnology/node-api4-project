// make your own middleware [ client --> Middleware (call next()) --> server ] / pay close attention to where and when your middleweare is being applied
const logQuote = (coin) => (req, res, next) => {
  console.log('a penny saved is a penny earned');

  if (coin == 'quarter') {
    console.log('yeet');
    next();
  } else if (coin == 'penny' || 'nickle') {
    console.log(`smol ${coin} bb`);
    next();
  } else {
    res.json("not a valid coin");
  }

}

const checkWord = (req, res, next) => {
  if (req.query.word === "bad") {
    res.json(`you can't proceed with the word: ${req.query.word}`);
  } else {
    next();
  }
}



module.exports = {
  logQuote,
  checkWord
}