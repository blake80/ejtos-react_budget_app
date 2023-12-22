import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const[newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    if (newBudget < 960 ) {
        alert("Budget should be more than what has already been allocated!")
    }
    if (newBudget > 20000) {
        alert("Budget cannot exceed $20,000!")
    }


    
    
    return (
<div className='alert alert-secondary'>
<span>Budget: ${budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};


export default Budget;