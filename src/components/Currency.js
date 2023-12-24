import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currency = () => {
    return (
        <div>
            <select>
                <option value="$ Dollar"></option>
                <option value="£ Pound"></option>
                <option value="€ Euro"></option>
                <option value="₹ Ruppee"></option>
            </select>
        </div>
    );
};

export default currency;