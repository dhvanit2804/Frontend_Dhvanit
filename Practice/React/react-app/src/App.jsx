import React from 'react';
import Hello from './Hello';
import Css from './Css/Css';
import Mainprops from './props/Mainprops';
import Mainstate from './States/Mainstate';
import FuncState from './States/FuncState';
// import Form from './Form/Formobj';
import Formobj from './Form/Formobj';
import Form from './Form/Form';
import Usedata from './UseEffect/Usedata';
import Usetable from './UseEffect/Usetable';
import Useaxios from './UseEffect/Useaxios';
import Fakestore from './UseEffect/Fakestore';
import Mockapi from './UseEffect/Mockapi';
import DummyUser from './DummyJson/DummyUser';
import DummyProduct from './DummyJson/DummyProduct';
import DummyCart from './DummyJson/DummyCart';


function App() {

  return (
    <>
      <div>
        {/* <Hello /> */}
        {/* <Mainprops /> */}
        {/* <Mainstate /> */}
        {/* <FuncState /> */}

        {/* <Formobj /> */}
        {/* <Form /> */}
        {/* <Usedata /> */}
        {/* <Usetable /> */}
        {/* <Useaxios /> */}
        {/* <Fakestore /> */}
        {/* <Mockapi /> */}
        <DummyUser />
        <DummyProduct />
        <DummyCart />
        
      </div>
    
    </>
  )
}

export default App
