import AppServer from './server.js';
import DefaultRouter from './routes/default-routes.js';
import AuthInterceptor from './interceptors/auth-interceptor';

const interceptors = [AuthInterceptor];
const routers = [DefaultRouter];
const apiServer = new AppServer();
const config = require('./conf/configuration.js');

const env = (_config) => {
  const _env = process.env.PROFILE;
  let profileConfig;
  if (!_env || process.env.PROFILE === 'development') {
    profileConfig = _config['local'];
  } else {
    profileConfig = _config[_env];
  }

  if (!profileConfig) {
    throw new Error(`Fail to load configuration for profile(${_env})`);
  }

  return profileConfig;
};

apiServer.initApp(env(config), routers, interceptors);
apiServer.startServer();
