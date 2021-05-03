import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

import { ExpensesList } from './components/Expenses/ExpensesList';
import { Create } from './components/Expenses/Create';
import { Update } from './components/Expenses/Update';
import { Delete } from './components/Expenses/Delete';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/create' component={Create} />
                <Route path='/list' component={ExpensesList} />
                <Route path='/update/:id' component={Update} />
                <Route path='/delete/:id' component={Delete} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
            </Layout>
        );
    }
}
