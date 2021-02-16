exports.getProduct = async (req, res) => {
  console.log(
    "[desafio-ripley][GET][user][currentUser][Request] ",
    req.params,
    req.body
  );
  res.sendStatus(200);
};
