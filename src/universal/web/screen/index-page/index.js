import Loadable from 'react-loadable';
import LoadingPage from 'universal/web/screen/loading-page';
import './style.scss';

export default Loadable({
  loader: () => import('./index-page'),
  loading: LoadingPage,
});
