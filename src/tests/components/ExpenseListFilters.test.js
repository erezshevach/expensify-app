import React from 'react';
import {shallow} from 'enzyme';
import moment from "moment";
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filtersEmpty, filtersValues} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filtersEmpty}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with filtersValues correctly', () => {
    wrapper.setProps({
        filters: filtersValues
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'filter by text';
    wrapper.find('input').simulate('change', {target:{value}});
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: filtersValues
    });
    wrapper.find('select').simulate('change', {target:{value}});
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {target:{value}});
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
    const startDate = moment(0).add(2, 'days');
    const endDate = moment(0).add(7, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});