import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const { text, title } = props;

   return (
      <Box>
         <Box display={"flex"} sx={{ backgroundColor: '#8c8c8c' }} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
            fontSize={'1rem'}>
            <Box width={{ xs: '20%', md: `${(title === "skills" || title === "experience") ? "20%" : "10%"}` }}>
               <i className={classNames(iconClass, Style.red)} />
               <i className={classNames(iconClass, Style.amber)} />
               <i className={classNames(iconClass, Style.green)} />
            </Box>

            <Box width={"80%"} textAlign={'center'}>
               <p style={{ margin: 0, padding: 0 }}>{props.title}</p>
            </Box>
         </Box>
         <Box py={{ xs: '1rem', md: '2rem' }} px={{ xs: '2rem', md: '3rem' }} borderRadius={'0 0 0.5rem 0.5rem'}
            sx={{ backgroundColor: '#27242f' }} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;