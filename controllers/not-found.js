exports.get404Page = (req, res, next) => {
  var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(ip);
  res.redirect("/");
};
