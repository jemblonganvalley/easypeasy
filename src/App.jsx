import React from 'react';
import './App.css';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';

function App() {

  let userData = useStoreState(state => state.userData)
  let product = useStoreState(state => state.product)
  let setUserData = useStoreActions(action => action.setUserData)
  let [formData, setFormData] = useState({
    id : userData.length + 1
  })
  return (
    <>
    <Navbar />
    <div className="App" style={{
      display : 'flex',
      justifyContent : 'space-between',
      flexWrap : 'wrap',
      alignItems : 'flex-start',
      marginTop : '40px',
      padding : '0px 10%',
    }}>
     
      <div className="form" style={{
        position : 'absolute',
        bottom : '100px',
        left : '100px',
        padding : '20px',
        boxShadow : '5px 5px 5px rgba(0,0,0,0.200)',
        zIndex : '200',
      backgroundColor : 'white',

      }}>
        <input type="text" onChange={(e)=>{
          setFormData({
            ...formData,
            username : e.target.value
          })
        }}/>

        <input type="text" onChange={(e)=>{
          setFormData({
            ...formData,
            password : e.target.value
          })
        }}/>

          <input type="text" onChange={(e)=>{
          setFormData({
            ...formData,
            avatar : e.target.value
          })
        }}/>

        <button onClick={()=>{
          setUserData(formData)
        }}>Submit</button>

      </div>

      {product.map((e)=>(
        <div className="card" style={{
        width : 'calc(80% / 3)',
        height : 'auto',
        padding : '10px 20px',
        boxShadow : '5px 5px 8px rgba(0,0,0,0.400)',
        // margin : '0 10%',
        marginBottom : '40px',
        borderRadius : '8px',
        textAlign : 'left',
        border : '.1px solid #bebebe',
        position : 'relative'
      }} key={e.id}>

        <span style={{
          color : e.like > 0 ? 'pink' : '#bebebe',
          position : 'absolute',
          right : '10px',
          top : '10px',
          cursor : 'pointer',
        }}>
          <i className='material-icons'>favorite</i>
          <b>{e.like}</b>
        </span>

        <span style={{
          color : e.chart ? 'pink' : '#bebebe',
          position : 'absolute',
          right : '10px',
          bottom : '10px',
          cursor : 'pointer',
        }}>
          <i className='material-icons'>
            add_shopping_cart
          </i>
        </span>

        <h3>{e.product_name}</h3>
        <img src={e.product_image} alt={e.product_name} width='100%' height='50%'/>
        <p>Rp. {e.product_price}</p>

      </div>
      ))}

      <div className="container">
        {userData.map((e)=>(
          <ul>
            <li>{e.username}</li>
            <li>{e.password}</li>
            <li>{e.avatar}</li>
          </ul>
        ))}
      </div>

    </div>
    </>
  );
}

export default App;
