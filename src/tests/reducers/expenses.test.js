import expensesReducer from "../../reducers/expenses";
import expensesList from "../fixtures/expensesList";
import moment from "moment";

const coffee = expensesList[0];
const rent = expensesList[1];
const party = expensesList[2];

test('should set default state', () => {
    const action = {type: '@@INIT'};
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([]);
});

test('should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: coffee.id
    };
   const state = expensesReducer(expensesList, action);
    expect(state).toEqual([rent, party]);
});

test('should not remove expense for non-existing id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '999'
    };
    const state = expensesReducer(expensesList, action);
    expect(state).toEqual(expensesList);
});

test('should add expense', () => {
    const newExpense = {
        id: '50',
        description: 'gym',
        note: '',
        amount: 3000,
        createdAt: moment(0).add(1, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        newExpense: newExpense
    };
    const state = expensesReducer(expensesList, action);
    expect(state).toEqual([...expensesList, newExpense]);
});

test('should edit expense', () => {
    const updatedExpense = {
        note: 'updated note'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: coffee.id,
        updatedExpense
    };
    const state = expensesReducer(expensesList, action);
    expect(state[0].note).toBe('updated note');
    expect(state[0].description).toBe(coffee.description);
    expect(state[0].amount).toBe(coffee.amount);
});

test('should not edit expense if not found', () => {
    const updatedExpense = {
        note: 'updated note'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: 999,
        updatedExpense
    };
    const state = expensesReducer(expensesList, action);
    expect(state).toEqual(expensesList);
});