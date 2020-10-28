import React from 'react'
import { useStoreState } from 'easy-peasy'

const Navbar = () => {

    let menu = useStoreState(state => state.menu)
    let user = useStoreState(state => state.userData[2])

  return (
    <div style={{
        width : '100vw',
        height : '10vh',
        position : 'sticky',
        top : '0',
        left : '0',
        display : 'flex',
        padding : '0px 10%',
        alignItems : 'center',
        justifyContent : 'flex-start',
        boxShadow : '3px 2px 5px rgba(0,0,0,0.300)',
        zIndex : '100',
        backgroundColor : 'ghostwhite'
    }}>
      <div className="brand">
          <h3>JVALLEY</h3>
      </div>

      <div className="menu" style={{
          width : '30%',
          display : 'flex',
          justifyContent : 'space-between',
          alignItems : 'center',
          marginLeft : '40px',
          cursor : 'pointer',
      }}>
        {menu.map((e)=>(
            <p key={e.id}>{e.name}</p>
        ))}
      </div>

      <div className="userArea" style={{
          marginLeft : 'auto',
          display : 'flex',
          alignItems : 'center',
      }}>
        <img src={user.avatar} alt={user.username} width='30px' height='30px' style={{
            borderRadius : '100px',
            marginRight : '5px',
        }}/>
        <p>{user.username}</p>
      </div>

    </div>
  )
}

export default Navbar
