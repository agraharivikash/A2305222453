export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

export const isValidShortCode = (code) => {
  return /^[a-zA-Z0-9]{4,10}$/.test(code);
};

export const isValidValidity = (val) => {
  return /^[0-9]+$/.test(val) && Number(val) > 0;
};