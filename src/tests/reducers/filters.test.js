import filtersReducer from "../../reducers/filters";
import moment from "moment";

const defaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should set default state values', () => {
    const action = {type: '@@INIT'};
    const state = filtersReducer(undefined, action)
    expect(state).toEqual(defaultState);
});

test('should set text', () => {
    const text = 'some text';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(defaultState, action)
    expect(state.text).toBe(text);
});

test('should set sortBy to amount', () => {
    const action = {type: 'SORT_BY_AMOUNT'};
    const state = filtersReducer(defaultState, action)
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const action = {type: 'SORT_BY_DATE'};
    const currentState = {...defaultState, sortBy: 'amount'}
    const state = filtersReducer(defaultState, action)
    expect(state.sortBy).toBe('date');
});

test('should set startDate', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(defaultState, action)
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(defaultState, action)
    expect(state.endDate).toEqual(endDate);
});