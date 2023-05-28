import moment from "moment";

const getVisibleExpenses = (expenses, filters) => {
    const {text, sortBy, startDate, endDate} = filters;
    const visibleExpenses = expenses.filter(expense => {
        const createAtMoment = moment(expense.createdAt);
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createAtMoment, 'day') : true;
        return textMatch && startDateMatch && endDateMatch;
    });
    const sortedVisibleExpenses = visibleExpenses.sort((a, b) => {
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : a.amount > b.amount ? -1 : 0;
        } else {
            return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
        }
    });
    return sortedVisibleExpenses;
}

export { getVisibleExpenses };