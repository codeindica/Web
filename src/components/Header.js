import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Links } from '../dataSource/data'
import { goToLink } from '../redux/actions'

function Header(props) {
  return (
    <div className="header p-1 d-flex flex-wrap justify-content-between align-items-center small-devices">
      <h5 className="text-white text-center p-3 m-0">te {props.linkValue}</h5>
      <ul className="d-flex justify-content-around list-unstyled m-0 p-2">
        {Links.map(item=>
          <li
            key={item.id}
            className="mx-3 text-white text-uppercase small font-weight-bold"
            onClick={()=> props.goToLink}>{item.title}
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    linkValue: state.linkValue
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    goToLink:()=> dispatch(goToLink())
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Header);