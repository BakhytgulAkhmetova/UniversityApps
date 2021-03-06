import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { MenuHead } from '../MenuHead';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

import './Header.scss';

const Header = ({ handleSignOut, onGetResults, fullName }) => {
    return (
        <AppBar position='fixed'>
            <Toolbar className='toolbar-manager'>
                <h2>Head: {fullName}</h2>
                <MenuHead
                    onGetResults={onGetResults}
                    handleSignOut={handleSignOut}
                    fullName={fullName}/>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    onGetResults: PropTypes.func.isRequired,
    handleSignOut: PropTypes.func.isRequired,
    fullName: PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
