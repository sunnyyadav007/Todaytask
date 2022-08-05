const jwt = require("jsonwebtoken");


exports.verifytoken = async (req, res, next) => {
  if (!req.headers || !req.headers.authorization)
    return next("token is required");
  const acesstok = req.headers.authorization;
  const token = await acesstok.split("Bearer ")[1];

  if (!token) return next("token is required");

  try {
    const verify = await jwt.verify(token, process.env.secretkey);
    req.verify = verify;

    next();
  } catch (e) {
    res.status(500).json({ error: "token expired or Invalid" });
  }
};
