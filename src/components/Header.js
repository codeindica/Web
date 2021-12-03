import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Links } from '../dataSource/data'
import { updateLinkValue } from '../redux/actions'
import logo from '../assets/snaps/logoTrans.png'


function Header() {
  const dispatch = useDispatch();
  const value = useSelector(state=>state.linkValue) || 0;
  return (
    <div className="header px-3 d-flex flex-wrap justify-content-between align-items-center small-devices">
      <div className="d-flex justify-content-center align-items-center">
        <img src={logo} className="logo" alt=""/>
        <p className="text-center text-white m-0" onClick={()=> dispatch(updateLinkValue(0))}>Code<span className="font-weight-bold">Indica</span></p>
      </div>
      <ul className="d-flex justify-content-around list-unstyled m-1 p-2">
        {Links.map(item=>
          <li style={{color: value === item.id ? '#70f7c4': 'white'}}
            key={item.id}
            className="mx-2 text-uppercase small font-weight-bold"
            onClick={()=> dispatch(updateLinkValue(item.value))}>{item.title}
          </li>
        )}
      </ul>
    </div>
  )
}
export default Header;