import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import totalExpenses from './ExpenseTotal';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const[newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
if (newBudget >= 20000) {
    alert("Budget cannot exceed $20,000!")
    }
if (newBudget <= totalExpenses ) {
    alert("Budget should be more than what has already been allocated!")
    }
    
    return (
<div className='alert alert-secondary'>
<span>Budget: ${budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;