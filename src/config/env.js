const PROJECT_ID = process.env.PROJECT_ID;
if (PROJECT_ID === undefined) {
  console.log(
    "[desafio-ripley][Error] No Project ID specified in the env variables"
  );
  process.exit(1);
}

module.exports = {
  PROJECT_ID,
};
