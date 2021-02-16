const {getProductFromDB} = require('../services/firestore');

exports.getProduct = async (req, res) => {
  console.log('[desafio-ripley][GET][getProduct][Request] ', req.params, req.body);
  try {
    const productInfo = await getProductFromDB(req.params);
    console.log('[desafio-ripley][GET][getProduct][response] ', productInfo);

    res.status(200).send(productInfo);
  } catch (err) {
    console.log('[desafio-ripley][GET][getProduct][Error]:', err);

    res.status(500).json(err);
  }
};
