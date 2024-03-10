const VerifyToken = (req, res) => {
  res.send("hola verify token");
};

const ReceivedMessage = (req, res) => {
  res.send("hola receive");
};

module.exports = {
  VerifyToken,
  ReceivedMessage,
};
