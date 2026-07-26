import EmberRouter from '@ember/routing/router';
import config from 'tools/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('seedvr2_resolution_calculator');
});
