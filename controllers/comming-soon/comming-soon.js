const resource = require("../../resources/comming-soon-resource");

exports.getCommingSoonPage = (req, res, next) => {
  res.render("comming-soon/index", {
    pageTitle: resource.getPageTitle,
    description: resource.getPageDescription,
    twitter: resource.getTwitterAddress,
    instagram: resource.getInstagramAddress,
    telegram: resource.getTelegramAddress
  });
};
