import React from 'react'
import Card from './Card'
import './Card.css'
import StaffList from './StaffList'

const CardList = () =>{
    return<div className ="row">
       {StaffList.map( (staff) =>
      <Card
       key = {staff.key}
       avatar = {staff.avatar}
       name = {staff.name}
       position = {staff.position}
       />
       )}
    </div>
}

export default CardList