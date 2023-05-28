import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage'
import expensesList from '../fixtures/expensesList';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
      <EditExpensePage
          editExpense={editExpense}
          removeExpense={removeExpense}
          history={history}
          expense={expensesList[1]}
      />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const update = {note: 'updated note'};
  wrapper.find('ExpenseForm').prop('onSubmit')(update);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expensesList[1].id, update);
});

test('should handle onRemove', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expensesList[1].id});
});
