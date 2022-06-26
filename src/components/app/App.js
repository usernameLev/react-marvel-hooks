import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppHeader } from '../appHeader/AppHeader';
import { SingleCharacterLayout } from '../pages/singleCharacterLayout/SingleCharacterLayout';
import { SingleComicLayout } from '../pages/singleComicLayout/SingleComicLayout';
import { SinglePage } from '../pages/SinglePage';
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
              <Route exact path='/'>
                <MainPage />
              </Route>

              <Route exact path='/comics'>
                <ComicsPage />
              </Route>

              <Route exact path='/comics/:id'>
                <SinglePage Component={SingleComicLayout} dataType='comic' />
              </Route>

              <Route exact path='/characters/:id'>
                <SinglePage
                  Component={SingleCharacterLayout}
                  dataType='character'
                />
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
