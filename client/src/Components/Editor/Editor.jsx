import React, { useState } from "react";
import { Box } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

const Editor = () => {

  const [res, setRes] = useState('');
  const codeTest = async (e) => {
    const language = "Python";   
    var api;
    if(process.env.NODE_ENV === 'development') api = 'http://localhost:8000/compile';
    else api = '/compile';

    //First Call
    var res = await fetch(api, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            val, language,
        })
    });
    
    var resp = await res.json();
    console.log(resp);
    if(resp.resp.stdout === '') {
      if(resp.resp.stderr === '') setRes('Unable to process :: Failed')
      else setRes(resp.resp.stderr);
    }
    else {
      if(resp.resp.stdout == 15) setRes(resp.resp.stdout + "All test cases are passed successfully");
      else setRes("Output should 15\n But your output is " + resp.resp.stdout);
    }
}

  var code = 'A = 5\nB = 10\n //Your Code';
  
  let [val, setval] = useState(code);
  const onChangeHandle = (e) => {
    console.log(e.target.value);
    setval(e.target.value);
  }

  return <Box>

    <Box m={2} color='white'>
       <Box p={5} display={'flex'} justifyContent={'space-between'}>
        <Box><Select placeholder='Python'></Select></Box>
        <Box mr={5}>Editor</Box>
       </Box>
       <Box m={5}>
        <Textarea padding={5} color='white' bg='black' w={'99%'} h={'70vh'} resize={'none'} value={val} onChange={onChangeHandle}/>
        <Button colorScheme='blue' onClick={codeTest}>Button</Button>
       </Box>
       <Box>
        <Box pl={5}>Output</Box>
        <Textarea padding={5} color='white' bg='black' m={'5px'} w={'97%'} h={'9vh'} resize={'none'} value={res} readOnly/>
       </Box>
    </Box>
  
  </Box> 
};

export default Editor;
