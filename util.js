const getZip = (address) => {
  const zipRegex = /\d{5}/g;
  const zip = address.match(zipRegex);
  return zip[zip.length - 1];
};

const getAddressParts = (address) => {
  const zip = getZip();
};

module.exports = {
  getZip,
  getAddressParts,
};
