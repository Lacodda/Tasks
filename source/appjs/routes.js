import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import List from './components/List';
import Add from './components/Add';
import Show from './components/Show';
import Edit from './components/Edit';

export default (
    <Route path="/" component={ App } >
        <IndexRoute component={ List } />
        <Route path="/add" component={ Add } />
        <Route path="/:id" component={ Show } />
        <Route path="/:id/edit" component={ Edit } />
    </Route>
);