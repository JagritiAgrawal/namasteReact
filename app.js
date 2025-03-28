// <div id ="root">
//<h1>
// Hello World From React !
// </h1>
// </div>

// Below code will be used for injecting the heading tag inside div which has id 'root' using REACT library.
const  reactHeading = React.createElement('h1', {}, "Hello World from React !");

console.log(reactHeading); //It is an object
          
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(reactHeading);  // render method is taking the object and converting it into HTML tag and attaching that HTML inside div named as root


// <div id ="root">
//<h1 id= 'heading' xyz=''abc> Hello World from React !</h1>
// </div>

const  reactHeadingWithAttribute = React.createElement('h1', {id: 'heading', xyz: 'abc' }, "Hello World from React !");
          
const reactRootForHeadingAttribute = ReactDOM.createRoot(document.getElementById('root'));

reactRootForHeadingAttribute.render(reactHeadingWithAttribute);




//<div id="parent">
// <div id= "child"> 
// <h1>
// I am an H1 tag       //Example 2
// </h1>
// </div>
// </div>

//<div id="parent">
// <div id= "child"> 
// <h1>
// I am an H1 tag       //Example 3
// </h1>
// <h2>  I am an H2 Tag </h2>
// </div>
// </div>


//Example 4
//<div id="parent">
// <div id= "child"> 
// <h1>
// I am an H1 tag    
// </h1>
// <h2>  I am an H2 Tag </h2>

//<div id= "child2"> 
// <h1>
// I am an child2H1 tag      
// </h1>
// <h2>  I am an child2H2 Tag </h2>
// </div>
// </div>


//*************************

//Example 2
//const parent2 = React.createElement("div", {id: 'parent'}, React.createElement("div", {id: "child"}, React.createElement('h1', {}, 'I am an H1 tag')))


 //   console.log(parent);// So basically parent 2 is an React Element  which is ultimately an object
        
   //      const commonroot = ReactDOM.createRoot(document.getElementById("root"));
         
     //    commonroot.render(parent); // Render function will convert this object into  h1 tag and then put on The DOM under root div present 
                                  //in the DOM.


//Example 3


//const parent = React.createElement("div", {id: 'parent'}, React.createElement("div", {id: "child"},[React.createElement('h1', {}, 'I am an H1 tag'),React.createElement('h2', {}, 'I am an H2 tag')] ))

  
//    console.log(parent);// So basically heading is an object which is ultimately an React Element
        
   //      const root = ReactDOM.createRoot(document.getElementById("root"));
         
  //        root.render(parent); // Render function will convert this object into  h1 tag and then put on The DOM under root div present 
                                  //in the DOM.
//                         *******************************************************************************//

//Example 4
                                  const parent = React.createElement("div", {id: 'parent'}, [React.createElement("div", {id: "child"},[React.createElement('h1', {}, 'I am an H1 tag'),React.createElement('h2', {}, 'I am an H2 tag')] ),React.createElement("div", {id: "child2"},[React.createElement('h1', {}, 'I am an child2H1 tag'),React.createElement('h2', {}, 'I am an child2H2 tag')] )] )

  
    console.log(parent);// So basically heading is an object which is ultimately an React Element
        
         const root = ReactDOM.createRoot(document.getElementById("root"));
         
          root.render(parent); // Render function will convert this object into  h1 tag and then put on The DOM under root div present 
                                  //in the DOM.