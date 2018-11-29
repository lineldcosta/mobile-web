/** @format */

import { AppRegistry } from 'react-native';
import App from './src/device/entry/index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
/*AppRegistry.runApplication(appName, { rootTag: document.getElementById('react-app') });
*/