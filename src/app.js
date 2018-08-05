import Vue from 'vue';
import App from './App.vue';

new Vue({
   el: '#app' 
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Counter from './counter'
// import { AppContainer } from 'react-hot-loader';

// /**
//  * AppContainer
//  * adds a 'hot' property to any incoming module as it is being loaded
//  */

// function render(Component) {
//     ReactDOM.render(
//     <AppContainer>
//         <Counter />
//     </AppContainer>
//     , document.getElementById('react-root')
//     );
// }

// render(Counter);

// if(module.hot) {
//     module.hot.accept("./counter.js", () => {
//         const NewCounter = require("./counter.js").default
//         render(NewCounter);
//     });
// }