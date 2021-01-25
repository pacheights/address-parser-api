const getZip = (address) => {
  const zipRegex = /(\d{5}-?\d{4}|\d{5})/g;
  const zipMatches = address.match(zipRegex);
  const lastIndex = zipMatches.length - 1;
  return zipMatches[lastIndex];
};

const getState = (address) => {
  const stateRegex = /[A-Z]{2}/g;
  const stateMatches = address.match(stateRegex);
  const lastIndex = stateMatches.length - 1;
  return stateMatches[lastIndex];
};

const getAddressParts = (address) => {
  const zip = getZip();
};

module.exports = {
  getZip,
  getState,
  getAddressParts,
};
