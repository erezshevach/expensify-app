import {getVisibleExpenses} from '../../selectors/expenses';
import moment from "moment";
import expensesList from "../fixtures/expensesList";

const coffee = expensesList[0];
const rent = expensesList[1];
const party = expensesList[2];

test('should filter by text value', () => {
    const filters = {
        text: 'rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expensesList, filters)
    expect(result).toEqual([rent]);
});

test('should filter by startDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).add(4, 'days'),
        endDate: undefined
    };
    const result = getVisibleExpenses(expensesList, filters)
    expect(result).toEqual([coffee, party]);
});

test('should filter by endDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(5, 'days')
    };
    const result = getVisibleExpenses(expensesList, filters)
    expect(result).toEqual([party, rent]);
});

test('should filter by startDate and endDate values', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).add(4, 'days'),
        endDate: moment(0).add(5, 'days')
    };
    const result = getVisibleExpenses(expensesList, filters)
    expect(result).toEqual([party]);
});

test('should sort by amount value', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expensesList, filters)
    expect(result).toEqual([rent, party, coffee]);
});

test('should sort by date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expensesList, filters)
    expect(result).toEqual([coffee, party, rent]);
});