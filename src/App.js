import React, {useState} from "react";
import {Link,Route,Switch} from 'react-router-dom'
import './App.css'
import PizzaForm from './Components/PizzaForm'
import img from './Assets/Pizza.jpg'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/schema'


const initialFormValues = {
  name: '',
  size: '',
  sauce:'',
  pepperjack: false,
  mozzerella:false,
  pepperoni:false,
  sausage:false,
  olives:false,
  onions:false,
  anchovies:false,
  spinach:false,
  special:''
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce:'',
  pepperjack: false,
  mozzerella:false,
  pepperoni:false,
  sausage:false,
  olives:false,
  onions:false,
  anchovies:false,
  spinach:false,
  special:''
}

const initialDisabled = true;
const initialPizza = []



const App = () => {
  const [pizza,setPizza] = useState([initialPizza]);
  const [formValues,setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  

  const postPizza = (newPizza) => {
    axios
      .post('https://reqres.in/api/',newPizza)
      .then((res)=>{
        setPizza([res.data],...pizza);
        setFormValues(initialFormValues)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //change callback
  const inputChange = (name,value) =>{
    yup
      .reach(schema,name)
      .validate(value)
      .then(()=>{
        setFormErrors({
          ...formErrors,
          [name]:'',
        });
      })
      .catch((err)=>{
        setFormErrors({
          ...formErrors,
          [name]:err.errors[0]
        })
      })
  }

  //submit call back
  const formSubmit = ()=>{
    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      sauce: ["red","white","olive","none"].filter(
        (sauce) => formValues[sauce]),
      pepperjack: formValues.pepperjack,
      mozzerella: formValues.mozzerella,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      olives: formValues.olives,
      onions: formValues.onions,
      anchovies: formValues.anchovies,
      spinach: formValues.spinach,
      special: formValues.special,
    }
    postPizza(newPizza);
  }

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to={'/'}>Home</Link>
          <Link  to={'/pizza'} className="pizzaBtn">Create Your Own Pizza</Link>
        </div> 
      </nav>

    <div className="hero-wrapper">
      <img className="home-image" src={img} alt="a pizza"></img>
    
    </div>

    <Route path="/pizza">
      <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </Route>
      
      







    </div>
  );
};
export default App;
