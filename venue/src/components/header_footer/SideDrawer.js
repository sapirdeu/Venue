import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';

function SideDrawer(props) {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -95
        })
        props.onClose(false)
    }

    return (
        <Drawer
            anchor = "right"
            open = {props.open}
            onClose = {() => props.onClose(false)}
        >
            <List component="nav">

                <ListItem button onClick={()=> scrollToElement('featured')}>
                    Event starts in
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('venueNfo')}>
                    Venue NFO
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('pricing')}>
                    Pricing
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer;