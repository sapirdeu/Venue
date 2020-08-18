import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function SideDrawer(props) {

    const handleClickEventStartsIn = () => {
        console.log('Featured')
    };

    const handleClickVenueInfo = () => {
        console.log('Venue NFO')
    };

    const handleClickHighlights = () => {
        console.log('Highlights')
    };

    const handleClickPricing = () => {
        console.log('Pricing')
    };

    return (
        <Drawer
            anchor = "right"
            open = {props.open}
            onClose = {() => props.onClose(false)}
        >
            <List component="nav">

                <ListItem button onClick={handleClickEventStartsIn}>
                    Event starts in
                </ListItem>

                <ListItem button onClick={handleClickVenueInfo}>
                    Venue NFO
                </ListItem>

                <ListItem button onClick={handleClickHighlights}>
                    Highlights
                </ListItem>

                <ListItem button onClick={handleClickPricing}>
                    Pricing
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer;