import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { hashHistory } from 'react-router'

import Layout from './layout.jsx'
import Home from './routes/home/index.jsx'
import Pageinfo from './routes/pageinfo/index.jsx'
import Ceshi from './routes/ceshi/index.jsx'

const routes = (
    <Router history={hashHistory}>
        <Route path="/"
               component={Pageinfo}>
            <IndexRoute component={Pageinfo}/>
            <Route path="page/:id" component={Pageinfo}></Route>
        </Route>
    </Router>
)

export default routes
