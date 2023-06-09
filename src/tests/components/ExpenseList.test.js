import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expensesList from "../fixtures/expensesList";

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expensesList}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});