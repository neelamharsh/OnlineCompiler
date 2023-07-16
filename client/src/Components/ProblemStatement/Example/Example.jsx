import React from "react";
import { Box } from '@chakra-ui/react'

const Example = ({seq, input, output, explanation}) => {
  return <>

    <Box bg='#1a326dF9' p={10} m={5} color='white'>
        Example : {seq} <br/>
        Input : <br/>
        {input} <br />
        Output : <br/>
        {output} <br/>
        Explanation <br/>
        {explanation}
    </Box>
    
  </> 
};

export default Example;
