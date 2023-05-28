import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import {addExpense} from "./actions/expenses";
import {getVisibleExpenses} from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

const {expenses, filters} = store.getState();
const visibleExpenses = getVisibleExpenses(expenses, filters);


store.dispatch(addExpense({description: 'water bill', amount: 45000, createdAt: 87000}));
store.dispatch(addExpense({description: 'gas bill', amount: 25000, createdAt: 95000}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));