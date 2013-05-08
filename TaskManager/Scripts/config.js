define([], function() {
  var config = {};
  config.apiKey = 'Ez2vnXWjlT_RsyfKZEoKOLGM';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '623208218824.apps.googleusercontent.com';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return config;
});
