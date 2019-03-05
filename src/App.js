import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Feed from './components/Feed';

const App = () => (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/feed" render={props => <Feed />} />
      </div>
    </BrowserRouter>
);

export default App;
