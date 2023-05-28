import moment from "moment";

const expensesList = [{
    id: '1',
    description: 'coffee',
    note: '',
    amount: 300,
    createdAt: moment(0).add(7, 'days').valueOf()
}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 200000,
    createdAt: moment(0).add(3, 'days').valueOf()
}, {
    id: '3',
    description: 'party',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(5, 'days').valueOf()
}];

export default expensesList;