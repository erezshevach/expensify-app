import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expensesList from "../fixtures/expensesList";

test('should render ExpenseListItem with expense details', () => {
    const wrapper = shallow(<ExpenseListItem expenses={expensesList[0]}/>);
    expect(wrapper).toMatchSnapshot();
});
