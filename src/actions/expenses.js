import uuid from "uuid";

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    newExpense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updatedExpense) => ({
        type: 'EDIT_EXPENSE',
        id,
        updatedExpense
});

export {addExpense, removeExpense, editExpense};