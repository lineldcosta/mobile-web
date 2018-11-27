import Loadable from 'react-loadable';
import LoadingPage from 'application/web/scenes/loading-page';
import './style.scss';

export default Loadable({
  loader: () => import('./index-page'),
  loading: LoadingPage,
});
