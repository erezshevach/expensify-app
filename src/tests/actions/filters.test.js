import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from "../../actions/filters";
import moment from "moment";

test('should setup set text filter action object', () => {
    const text = 'some text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should setup set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should setup sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should setup sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should setup setStartDate action object', () => {
    const startDate = moment(50000);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: startDate
    });
});

test('should setup setEndDate action object', () => {
    const endDate = moment(20000);
    const action = setStartDate(endDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: endDate
    });
});