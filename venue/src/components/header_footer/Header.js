import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';


function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    window.addEventListener('scroll', function() {
            var lastScrollTop = 0;
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                setHeaderShow(true);
            } else {
                setHeaderShow(false);
            }
        }
    )

    return (
        <div>
            <AppBar
                position="fixed"
                style={{ 
                    backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">
                            The Venue
                        </div>
                        <div className="header_logo_title">
                            Musical Events
                        </div>
                    </div>

                    <IconButton
                        aria-label= 'Menu'
                        color= 'inherit'
                        onClick= {()=>setDrawerOpen(true)}
                    >
                        <MenuIcon>
                        </MenuIcon>
                    </IconButton>

                    <SideDrawer
                        open = {drawerOpen} 
                        onClose = {(value) => setDrawerOpen(value)}
                    />
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Header;