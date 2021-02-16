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

exports.getProductFromDB = async (id) => {
  console.log('[desafio-ripley][Firestore][getProductFromDB][Request]', id);
  try {
    const snapshot = await productsRef.where('id', '==', parseInt(id.id)).get();

    if (snapshot.empty) {
      console.log('[desafio-ripley][Firestore][getProductFromDB][Response] No matching documents');
      return null;
    } else {
      let product;
      snapshot.forEach((doc) => {
        product = doc.data();
      });
      console.log('[desafio-ripley][Firestore][getProductFromDB][Response]:', product);
      return product;
    }
  } catch (err) {
    console.log('[desafio-ripley][Firestore][getProductFromDB][Error]', err);
  }
};
