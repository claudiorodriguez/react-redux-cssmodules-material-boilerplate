import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router';

function NavigationBar(props, context) {
  const iconStyle = {
    color: context.muiTheme.appBar.textColor
  };

  return (
    <AppBar
      title="Legal Admin"
      iconElementLeft={
        <IconMenu
          iconButtonElement={
            <IconButton><NavigationMenu /></IconButton>
          }
          iconStyle={iconStyle}
        >
          <MenuItem primaryText="Index" containerElement={<Link to="/" />} />
          <MenuItem primaryText="Other" containerElement={<Link to="/other" />} />
        </IconMenu>
      }
    />
  );
}

NavigationBar.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default NavigationBar;
