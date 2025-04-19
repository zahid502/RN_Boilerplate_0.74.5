import env from 'react-native-config';

const appConfigs = {
  BASE_URL: env.BASE_URL,

  PRODUCTION: env.PRODUCTION === 'true',
};

export default appConfigs;
