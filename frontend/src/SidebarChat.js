import React from 'react'
import {Avatar} from '@material-ui/core';
import './SidebarChat.css'

function SidebarChat() {
    return (
        <>
        <div className="sidebarChat">
          <Avatar src="https://images.unsplash.com/photo-1603750442835-18d1fc79e480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" />

         <div className="sidebarChat__info">
                <h2> Get Together </h2>
                
                <p> 4PM sharp!</p>
            </div>

          
        </div>
        
          <div className="sidebarChat">
          <Avatar src="https://images.unsplash.com/photo-1603712969376-1d98cfbe7857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />

         <div className="sidebarChat__info">
                <h2> Alex </h2>
                
                <p> Check out my code bruh</p>
            </div>

          
        </div>

        
           <div className="sidebarChat">
          <Avatar src="https://images.unsplash.com/photo-1603772655666-ebfef11aae0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />

         <div className="sidebarChat__info">
                <h2> Marina </h2>
                
                <p> Where are you?</p>
            </div>

          
        </div>

        <div className="sidebarChat">
          <Avatar src="https://images.unsplash.com/photo-1603776084118-fd3e44bfac91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />

         <div className="sidebarChat__info">
                <h2> Alicia </h2>
                
                <p> PayPal me $40 ASAP for UBER!</p>
            </div>

          
        </div>

              <div className="sidebarChat">
          <Avatar src="https://images.unsplash.com/photo-1603727016411-92957840b9d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />

         <div className="sidebarChat__info">
                <h2> Abish </h2>
                
                <p> BYOB! </p>
            </div>

          
        </div>

              <div className="sidebarChat">
          <Avatar src="https://images.unsplash.com/photo-1603550577634-8d249d98a918?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />

         <div className="sidebarChat__info">
                <h2> Aron </h2>
                
                <p> Bring in the dope playlist! </p>
            </div>

          
        </div>
        
        </>
        
    )
}

export default SidebarChat
