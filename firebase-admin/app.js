const express = require("express");
const admin = require("firebase-admin");
const credential = require("./service.json");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(credential),
});

app.post("/signup", async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const createRespone = await admin.auth().createUser({
    email: user.email,
    password: user.password,
    emailVerified: false,
    disabled: false,
  });



  admin.auth().verifyIdToken(createRespone.verifyIdToken);

  res.json(createRespone);
});

app.listen(2000, () => console.log("server running"));
