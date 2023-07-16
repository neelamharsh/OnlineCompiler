import React from "react";
import { Box } from '@chakra-ui/react'
import Statement from "./Statement/Statement";
import Example from "./Example/Example";

const ProblemStatement = () => {
  return <>

  <Box>

    <Box  p={10} color='white' textDecoration="underline">
      ProblemStatement
    </Box>

    <Statement statement_value={"Given two positive integer A, B, determine its sum."}/>

    {/* We can use Map Also, To Render Examples */}
    <Example seq={1} input={'A = 5, B = 10'} output={'15'} explanation={'The output is self- explanatory.'}/>
    
    <Example seq={2} input={'A = 10, B = 5'} output={'15'} explanation={'The output is self- explanatory.'}/>
    
    <Box p={10} color='white' textDecoration="underline">
        Your Task
    </Box>

    <Statement statement_value={"You don't need to read input or print anything. Your task is to Add Both the integers A and B."}/>

    <Box fontStyle={'italic'} fontSize={12} p={10} color='white' textDecoration="none">
        Expected Time Complexity: O(1) <br/>
        Expected Auxiliary Space: O(1)
    </Box>

  </Box>

  </> 
};

export default ProblemStatement;
