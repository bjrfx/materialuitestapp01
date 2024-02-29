import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Typography from "@mui/material/Typography";
//import styled from '@emotion/styled';
import {styled, useTheme} from "@mui/material/styles";

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

//   const useStyles = styled(theme => ({
//     toolbarMargin: {
//         ...theme.mixins.toolbar
//     }
//   }))
        const StyledHeader = styled(AppBar)(({theme}) => ({
            minHeight: 100,
            ...theme.mixins.toolbar
        }))

export default function Header(props) {
    const theme = useTheme();
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
        
        </React.Fragment>
    )
}