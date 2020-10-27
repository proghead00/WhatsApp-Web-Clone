import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeTwoToneIcon from '@material-ui/icons/DonutLargeTwoTone';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import { SearchOutlined } from "@material-ui/icons"
import SidebarChat  from './SidebarChat'


function Sidebar() {
    return (
        <div className="sidebar">
          
          <div className="sidebar__header">
              <Avatar src="https://avatars0.githubusercontent.com/u/55017730?s=460&u=91fpU2rYYx3dUX64cTxLMfe5hGNVu9pNY6f951f&v=4" />
              <div className="sidebar__headerRight">

                <IconButton>
                    <DonutLargeTwoToneIcon />
                </IconButton>


                <IconButton>
                    <ChatIcon />
                </IconButton>

                <IconButton>
                    <MoreVertTwoToneIcon />
                </IconButton>
              </div>
          </div>

          <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search..." type="text"/>
            </div>
          </div>
          <div className="sidebar__chats">
              <SidebarChat />
             
          </div>
        </div>
    )
}

export default Sidebar
