import React from "react";
import { Box } from '@chakra-ui/react'

const Statement = ({statement_value}) => {
  return <>

    <Box fontSize={12} fontStyle={'italic'} pl={10} pb={10} color='white'>
        {statement_value}
    </Box>

  </> 
};

export default Statement;
