import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='alert alert-secondary'>
                        <label style={{marginLeft: '1rem', backgroundColor:'#33FF49', color:'white'}}>Currency
                        <select name='hover_color' id="currency" onChange={(event)=>changeCurrency(event.target.value)}>
                        <option style={{color:'black'}} value="£">£ Pound</option>
                        <option style={{color:'black'}} value="$">$ Dollar</option>
                        <option style={{color:'black'}} value="€">€ Euro</option>
                        <option style={{color:'black'}} value="₹">₹ Rupee</option>
                        </select>
                        </label>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
