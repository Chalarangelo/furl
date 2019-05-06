module.exports = async ({ config, mode }) => {

  config.cache = true;
  config.devtool = false;

  return config;
};