const Users = require("../module/userModule");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const generateOTP = require("otp-generator");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).send("please fill all required fields");
  } else {
    const isUserExist = await Users.findOne({ email });
    if (isUserExist) {
      res.status(400).send("user already exits");
    } else {
      const userData = new Users({ username, email });
      bcrypt.hash(password, 10, async (err, hashedPassword) => {
        userData.set("password", hashedPassword);
        await userData.save();
      });
      res.status(200).send("user registration succesfully");
    }
  }
};

const verifyUser = async (req, res, next) => {
  const { email } = req.method == "GET" ? req.query : req.body;
  const isUserExist = await Users.findOne({ email });
  if (!isUserExist) return res.status(404).send("can not found user");
  next();
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("please fill all required fields");
  } else {
    const user = await Users.findOne({ email});
    if (!user) {
      res.status(400).send("email and password incorrect");
    } else {
      const validateUser = await bcrypt.compare(password, user.password);
      if (!validateUser) {
        res.status(400).send("email and password incorrect");
      } else {
        const payload = {
          userId: user._id,
          email: user.email
        };
        const JWT_SECRET_KEY =
          process.env.JWT_SECRET_KEY || "THIS_IS_A_JWT_SECRET_KEY";
        jwt.sign(
          payload,
          JWT_SECRET_KEY,
          { expiresIn: 84600 },
          async (err, token) => {
            await Users.updateOne({ _id: user._id }, {
              $set: { token }
          })
          user.save();
          }
        );
        res.status(200).json({
          user: {
            username: user.username,
            email: user.email,
            token: user.token,
            msg: "user login successfully",
          },
        });
      }
    }
  }
};

const getUser = async (req, res) => {
  const { username } = req.params;
  if (!username) return res.status(500).send("invalid username");
  try {
    const user = await Users.findOne({ username });

    if (!user) return res.status(400).send("user not found");
    return res.status(200).json({
      user: { username: user.username, email: user.email, id: user._id },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.user;
    const data = await Users.updateOne({ _id: userId }, { $set: req.body });
    return res.status(200).send("user data updated", data);
  } catch (error) {
    console.log(error);
  }
};

const getOTP = async (req, res) => {
  req.app.locals.OTP = generateOTP.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  res.status(200).send({ code: req.app.locals.OTP });
};

const verifyOTP = async (req, res) => {
  const { code } = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(200).send("verifycation successfully");
  }
  return res.status(400).send("verifycation Failed");
};

const createResetSession = async (req, res) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false;
    return res.status(200).send("access granted");
  }
  return res.status(400).send(" session expired");
};

// const resetPassword = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     try {
//       Users.findOne({ username })
//       .then((user) => {
//         bcrypt.hash(password, 10)
//           .then((hashedPassword) => {
//             Users.updateOne(
//               { username: user.username },
//               { password: hashedPassword },
//               function (err, data) {
//                 if (err) throw err;
//                 return res.status(200).send("password changed");
//               });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       });

//   } catch(err){
//     console.log(err);
//   }
// }catch(err){
//   console.log(err);
// }
//   };

const resetPassword = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (!user) return res.status(400).send("username incorrect");
  else {
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      await Users.updateOne({ user: user.email }, { password: hashedPassword });
      return res.status(200).send("password updated");
    });
  }
};

//middleWare authentication
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoddedtoken = jwt.verify(token, "THIS_IS_A_JWT_SECRET_KEY");
    req.user = decoddedtoken;
    next();
  } catch (error) {
    console.log(error);
  }
};
const localVariable = async (req, res, next) => {
  req.app.locals = {
    otp: null,
    resetSession: false,
  };
  next();
};

module.exports = {
  register,
  login,
  verifyUser,
  getUser,
  updateUser,
  auth,
  localVariable,
  getOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
};
