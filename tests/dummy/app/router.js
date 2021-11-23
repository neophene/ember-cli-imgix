import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('examples', { path: '/examples' });
  this.route('usage', { path: '/usage' });
  this.route('index', { path: '/' });
});

export default Router;
