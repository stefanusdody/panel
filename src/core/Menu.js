import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
   Collapse,
   NavbarToggler,
   Nav, NavItem,
   NavLink } from 'reactstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbarTitle: {
    flex: 1,
    margin: theme.spacing(1)
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  icon: {
    marginRight: theme.spacing(2)
  }
}));


const Menu = ({ history }) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
      <div className={classes.grow}>
        <AppBar color="inherit" position="fixed" >
           <Toolbar>
              <div className={classes.toolbarTitle}>
                <img alt="Remy Sharp" src={require(`../assets/favicon.ico`)}   className={classes.large} />
             </div>
            </Toolbar>
          </AppBar>
      </div>
  )
};

export default withRouter(Menu);
