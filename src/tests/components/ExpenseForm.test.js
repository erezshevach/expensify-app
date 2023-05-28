import React from "react";
import {shallow} from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expensesList from "../fixtures/expensesList";

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense details', () => {
    const wrapper = shallow(<ExpenseForm expense ={expensesList[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper.state('missingRequiredFieldError')).toBe('');
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('missingRequiredFieldError').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'some text';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change', () => {
    const value = 'some text';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid input change', () => {
    const value = '123.45';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {target: { value }});
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {target: { value: '.45' }});
    expect(wrapper.state('amount')).toBe('');
    wrapper.find('input').at(1).simulate('change', {target: { value: '123s' }});
    expect(wrapper.state('amount')).toBe('');
    wrapper.find('input').at(1).simulate('change', {target: { value: '123.4.5' }});
    expect(wrapper.state('amount')).toBe('');
    wrapper.find('input').at(1).simulate('change', {target: { value: '123.456' }});
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expensesList[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(onSubmitSpy).toBeCalledWith({
        description: expensesList[0].description,
        note: expensesList[0].note,
        amount: expensesList[0].amount,
        createdAt: expensesList[0].createdAt,
    });
});

test('should set date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});