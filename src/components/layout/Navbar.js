import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

//MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
//Icon
import HomeIcon from '@material-ui/icons/Home'



class Navbar extends Component{
    
    render(){
        return(
            <AppBar position="static">
              <Toolbar>
                <Fragment>
              <Button color="inherit" component={Link} to='/login' >
                  LOGIN
                  </Button>
                <Button color="inherit" component={Link} to='/'>
                    HOME
                    <HomeIcon/>
                    </Button>
                <Button color="inherit" component={Link} to='/signup'>
                    SIGNUP
                    </Button>
                    </Fragment>
              </Toolbar>
            </AppBar>
        )
    }
}
export default Navbar;