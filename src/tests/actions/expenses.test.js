import {addExpense, editExpense, removeExpense} from "../../actions/expenses";
import moment from "moment";

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const id = '123abc';
    const updatedExpense = {amount: 5500};
    const action = editExpense(id, updatedExpense);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: id,
        updatedExpense: updatedExpense
    });
});

test('should setup add expense action object with provided values', () => {
    const newExpense = {
        description: 'some new expense',
        note: 'some note',
        amount: 4800,
        createdAt: 999999
    };
    const action = addExpense(newExpense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        newExpense: {
            id: expect.any(String),
            ...newExpense
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        newExpense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});