import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import PropTypes from 'prop-types';
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Typography from "@mui/material/Typography";


function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

//   const useStyles = makeStyles(theme => ({
//     toolbarMargin: {
//         ...theme.mixins.toolbar
//     }
//   }))

export default function Header(props) {
    // const classes = useStyles()
    return (
        <React.Fragment>
            <ElevationScroll>
            <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        <Typography color="common" variant="subtitle1">
                BJRfx Development
                        </Typography>
                    </Toolbar>
            </AppBar>
        </ElevationScroll>
        {/* <div className={classes.toolbarMargin} /> */}
        </React.Fragment>
    )
}