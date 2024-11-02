import React from 'react'
import './list.css'
import Userinfo from './userinfo/Userinfo'
import ChatList from './chatlist/ChatList'
function List() {
  return (
    <div className='list'>
          <Userinfo />
          <ChatList/>
    </div>
  )
}

export default List
