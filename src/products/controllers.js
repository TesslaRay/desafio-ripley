const {
  getProductFromDB,
  addProductToDB,
  deleteProductFromDB,
  updateProductFromDB,
  getAllProductsFromDB,
} = require('../services/firestore');

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

exports.createProduct = async (req, res) => {
  console.log('[desafio-ripley][POST][createProduct][Request] ', req.params, req.body);
  const {product} = req.body;
  try {
    const ref = await addProductToDB(product);
    console.log('[desafio-ripley][POST][createProduct][Response]', {
      newProduct: product.name,
    });
    res.status(200).send(product);
  } catch (err) {
    console.log('[desafio-ripley][POST][createProduct][Error]', err);
    res.status(500).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  console.log('[desafio-ripley][DELETE][deleteProduct][Request]', req.params, req.body);

  try {
    await deleteProductFromDB(req.params);
    console.log('[desafio-ripley][DELETE][deleteProduct][Response]', {
      deleteProduct: req.params,
    });
    res.status(200).send({deleteProduct: req.params.id});
  } catch (err) {
    console.log('[desafio-ripley][DELETE][deleteProduct][Error]', err);
    res.status(500).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  console.log('[desafio-ripley][PUT][updateProduct][Request]', req.body);
  const id = req.body.id;
  const product = req.body.product;

  try {
    await updateProductFromDB(id, product);
    console.log('[desafio-ripley][PUT][updateProduct][Response]', {
      updateProduct: product,
    });
    res.status(200).send({updateProduct: product});
  } catch (err) {
    console.log('[desafio-ripley][PUT][updateProduct][Error]', err);
    res.status(500).json(err);
  }
};

exports.getAllProducts = async (req, res) => {
  console.log('[desafio-ripley][GET][getAllProducts][Request] ', req.params, req.body);
  try {
    const productsInfo = await getAllProductsFromDB();
    console.log('[desafio-ripley][GET][getAllProducts][response] ', productsInfo);

    res.status(200).send(productsInfo);
  } catch (err) {
    console.log('[desafio-ripley][GET][getAllProducts][Error]:', err);

    res.status(500).json(err);
  }
};
