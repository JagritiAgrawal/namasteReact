import React from 'react';
import ReactDOM from 'react-dom/client';


const elem = <span> React Element </span>

const title  = (
  <h1 className = 'head'  tabIndex = "5" >
    {elem}
    Namaste React using JSX .
  </h1>
)

// JSX ==HTML like or XML like syntax
const Title = () => {
  return (<h1 className='head' tabIndex = '1'> Namaste React from JSX Functional Component</h1> ) ;
} 

const HeadingComponent = () => {

return (<div id='container'>
  {title}
  <Title />
  <h1 id ='heading'> Namaste React Functional Component </h1>
  </div>);
}

const root = ReactDOM.createRoot (document.getElementById('root'));

root.render (<HeadingComponent />);