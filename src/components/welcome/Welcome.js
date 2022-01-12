//To display welcome, user's first name - this is because in the log-in,js, local session value is set to the user's first name 
//also to show the tooltips, thanking Andy, Steven and Heaven

import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const Welcome = ({name}) => {
   
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Thank you Andy, Steven, and Heaven
        </Tooltip> 
        )
   
    return ( 
        <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
   <div>Howdy {name}!  </div>

   </OverlayTrigger>
) 
}