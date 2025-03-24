const { data } = require("../Users.json");

const getCurrencies = (req, res) => {
  const { min_value } = req.query;
  if (min_value)
    return res.send(data.filter((curr) => curr.min_size === min_value));
  res.send(data);
};

const getCurrencyBySymbol = (req, res) => {
  const { symbol } = req.params;
  const reqCurrency = data.find((curr) => curr.id === symbol.toUpperCase());
  if (!reqCurrency)
    // return res.sendStatus(404);
    return res.status(404).send({
      message: `Currency with symbol: '${symbol}' could not be found!`,
    });
  res.send(reqCurrency);
};

// const a = 5;

// const obj = { a: a } // { a }

const getUser = (req,res) => {
    res.send(data);
}

const getUserById = (req, res) => {
    const {uuid} = req.params;
    const requiredUser = data.find((user) => user.login.uuid == uuid)
    if(!requiredUser)
        return res.status(404).send({message: "User not found"});
    return res.data.login.uuid;
  };
  
  const getUsersByGenderAndAge = (req, res) => {
    const { uuid } = req.params;
    const reqCurrency = data.find((curr) => curr.id === symbol.toUpperCase());
    if (!reqCurrency)
      // return res.sendStatus(404);
      return res.status(404).send({
        message: `Currency with symbol: '${symbol}' could not be found!`,
      });
    res.send(reqCurrency);
  };

module.exports = {getUsers, getUserByID, getUsersByGenderAndAge, getCurrencies, getCurrencyBySymbol };