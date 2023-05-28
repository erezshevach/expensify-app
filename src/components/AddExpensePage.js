import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses'

class AddExpensePage extends React.Component {
    onSubmit = (newExpense) => {
        this.props.addExpense(newExpense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (newExpense) => dispatch(addExpense(newExpense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
export {AddExpensePage};