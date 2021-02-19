const {PROJECT_ID} = require('../config/env');

let config = {
  projectId: PROJECT_ID,
};

const admin = require('firebase-admin');

admin.initializeApp({
  config,
});

const db = admin.firestore();

const productsRef = db.collection('products');

exports.addProductToDB = async (product) => {
  console.log('[desafio-ripley][Firestore][addProductToDB]');
  product.id = Math.floor(Math.random() * 999);
  try {
    const ref = await productsRef.add(product);

    return ref;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

exports.getProductFromDB = async (id) => {
  console.log('[desafio-ripley][Firestore][getProductFromDB]');
  try {
    const snapshot = await productsRef.where('id', '==', parseInt(id.id)).get();

    if (snapshot.empty) {
      return null;
    } else {
      let product;
      snapshot.forEach((doc) => {
        product = doc.data();
      });
      return product;
    }
  } catch (err) {
    throw new Error(err);
  }
};

exports.updateProductFromDB = async (id, product) => {
  console.log('[desafio-ripley][Firestore][updateProductFromDB]');

  try {
    const ref = await productsRef
      .where('id', '==', parseInt(id))
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          productsRef.doc(doc.id).update(product);
        });
      });
    return ref;
  } catch (err) {
    throw new Error(err);
  }
};

exports.deleteProductFromDB = async (id) => {
  console.log('[desafio-ripley][Firestore][deleteProductFromDB]');
  try {
    const snapshot = await productsRef.where('id', '==', parseInt(id.id)).get();
    snapshot.forEach((doc) => {
      doc.ref.delete();
    });
    return;
  } catch (err) {
    throw new Error(err);
  }
};

exports.getAllProductsFromDB = async () => {
  console.log('[desafio-ripley][Firestore][getAllProductsFromDB]');
  try {
    const snapshot = await productsRef.get();

    if (snapshot.empty) {
      return null;
    } else {
      return snapshot.docs.map((doc) => doc.data());
    }
  } catch (err) {
    throw new Error(err);
  }
};
