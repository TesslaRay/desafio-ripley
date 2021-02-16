const API = require("./index");

const PORT = process.env.PORT;

if (PORT === undefined) {
  console.log("[test-ripley][Error] No port specified in the env variables");
  process.exit(1);
}

API.listen(PORT, () => {
  console.log("[test-ripley] Listening on port", PORT);
});
