import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppHeader } from '../appHeader/AppHeader';
import { Spinner } from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));

export const App = () => {
  return (
    <Router>
      <div className='app'>
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path='/' exact>
                <MainPage />
              </Route>

              <Route path='/comics' exact>
                <ComicsPage />
              </Route>

              <Route path='/comics/:comicId' exact>
                <SingleComicPage />
              </Route>

              <Route path='*'>
                <Page404 />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};
