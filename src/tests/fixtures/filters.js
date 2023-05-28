import moment from "moment";

const filtersEmpty = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersValues = {
    text: 'bill',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(5, 'days')
};

export {filtersEmpty, filtersValues};