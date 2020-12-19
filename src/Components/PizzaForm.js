import React from 'react'
import {Link} from 'react-router-dom'

export default function PizzaForm(props){
    const {values, submit,change,disabled,errors} = props;

    const onSubmit = (event) =>{
        event.preventDefault();
        submit();
    };

    const onChange = (event) =>{
        const {name,value,type,checked} = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name,valueToUse);
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
        <div className="errors">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className="form-group inputs">
            <h2>Create Your Pizza Order </h2>
        <div className="pizza-title">Name</div> 
        <div>{errors.name}</div>
            <input
                name="name"
                type="text"    
                value={values.name}
                onChange={onChange}
            />
        <div className="pizza-title">Size of Pizza</div>
    
            <select
                name="size"
                value={values.size}
                onChange={onChange}>
                <option value="">- Select a size</option>
                <option value="large">Large</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
            </select>
        <div className="pizza-title">Sauce</div>
        <div>{errors.sauce}</div>
            <label>Red Sauce
                <input
                    type="radio"
                    name="sauce"
                    value="red"
                    checked={values.sauce === 'red'}
                    onChange={onChange}
                />
            </label>
            <label>White Sauce
                <input
                    type="radio"
                    name="sauce"
                    value="white"
                    checked={values.sauce === 'white'}
                    onChange={onChange}
                />
            </label>
            <label>Olive Oil
                <input
                    type="radio"
                    name="sauce"
                    value="olive"
                    checked={values.sauce === 'olive'}
                    onChange={onChange}
                />
            </label>
            <label>None
            <input
                type="radio"
                name="sauce"
                value="none"
                checked={values.sauce === 'none'}
                onChange={onChange}
            />
        </label>
        <div className="pizza-title">Toppings</div> 
            <label>PepperJack
            <input 
                type="checkbox"
                name="pepperjack"
                checked={values.pepperjack}
                onChange={onChange}
            />
            </label>
            <label>Mozzerella
            <input 
                type="checkbox"
                name="mozzerella"
                checked={values.mozzerella}
                onChange={onChange}
            />
            </label>
            <label>Pepperoni
            <input 
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
            />
            </label>
            <label>Sausage
            <input 
                type="checkbox"
                name="sausage"
                checked={values.sausage}
                onChange={onChange}
            />
            </label>
            <label>Olives
            <input 
                type="checkbox"
                name="olives"
                checked={values.olives}
                onChange={onChange}
            />
            </label>
            <label>Onions
            <input 
                type="checkbox"
                name="onions"
                checked={values.onions}
                onChange={onChange}
            />
            </label>
            <label>Anchovies
            <input 
                type="checkbox"
                name="anchovies"
                checked={values.anchovies}
                onChange={onChange}
            />
            </label>
            <label>Spinach
            <input 
                type="checkbox"
                name="spinach"
                checked={values.spinach}
                onChange={onChange}
            />
            </label>
        
        <div className="pizza-title">Special Instruction</div>
            <textarea
                name="special"
                value={values.special}
                onChange={onChange}    
            ></textarea>
            </div>
        <Link to="/confirmation">
       <button disabled={disabled}>Finish Order</button>
       </Link>
        </form>
    )

}