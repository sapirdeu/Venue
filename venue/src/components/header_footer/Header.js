import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';


function Header() {
    return (
        <div>
            <AppBar
                position="fixed"
                style={{ 
                    backgroundColor: '#2f2f2f',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteaous header_logo_venue  header_logo_firstLine">
                            The Venue
                        </div>
                        <div className="header_logo_title header_logo_secondLine">
                            Musical Events
                        </div>
                    </div>

                    <IconButton
                        aria-label= 'Menu'
                        color= 'inherit'
                        onClick= {()=>console.log('open')}
                    >
                        <MenuIcon>
                        </MenuIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
