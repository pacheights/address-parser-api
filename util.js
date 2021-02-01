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

const getAptUnitSuite = (address) => {
  const aptRegex = /\b(?=Apt|Suite|Unit)\w\S+\s\w+/gi;
  const aptMatches = address.match(aptRegex);
  return aptMatches[0];
};

const getHouseNumber = (address) => {
  const houseNumberRegex = /^(\d+)/g;
  const houseNumberMatches = address.match(houseNumberRegex);
  return houseNumberMatches[0];
};

const getAddressParts = (address) => {
  const zip = getZip();
};

module.exports = {
  getHouseNumber,
  getZip,
  getState,
  getAptUnitSuite,
};
