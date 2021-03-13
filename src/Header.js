import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import BookMarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import LocalMall from '@material-ui/icons/LocalMallOutlined'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Button } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
function Header() {
    return (
        <div className="header">
        
            <div className="header_left">
                    <img src="https://massets.appsflyer.com/wp-content/uploads/2020/09/10168-TATACliq-CaseStudy-Logo-200X200.png"/>
            </div>

            <div className="header_right">
                <div className="header_top">
                    <div className="header_topleft">
                        <h5>Tata CLiQ Luxury</h5>
                    </div>
                    <div className="header_topright">
                        
                        <h5>CLiQ Cash</h5>
                        <h5>Gift Card</h5>
                        <h5>Tata CLiQ Care</h5>
                        <h5>Track Orders</h5>
                        <div className="signup">
                        <h5>Sign in / Sign Up</h5>
                        <div className="hoverdata">
                            <Button>Login / Register</Button>
                            <div>
                                <AccountCircleOutlinedIcon/>
                                <h5>My Accounts</h5>
                            </div>
                            <div>
                                <LocalMall/>
                                <h5>My Purchases</h5>
                            </div>
                            <div>
                                <NotificationsOutlinedIcon/>
                                <h5>Your Alerts</h5>
                            </div>
                            <div>
                                <CardGiftcardOutlinedIcon/>
                                <h5>Gifts and Cards</h5>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                   
                </div>
                <div className="header_bottom">
                    <div className="header_bottomleft">
                        <div>
                            <h5>Categories</h5>
                            <ExpandMore style={{color:'white'}}/>
                       </div>
                       <div>
                            <h5>Brands</h5>
                            <ExpandMore style={{color:'white'}}/>
                       </div>
                    </div>
                    <div className="header_bottomright">
                        
                        <div className="header_input">
                            <input type="text" placeholder="Search"/>
                            <SearchIcon className="search" style={{color:"white"}}/>
                        </div>     
                        <BookMarkIcon style={{color:"white"}}/>
                        <LocalMall style={{color:"white"}}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header
