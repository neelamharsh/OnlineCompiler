import React from 'react';
import { Box } from '@chakra-ui/react'
import NavBar from '../Components/NavBar/NavBar';
import ProbkemStatement from '../Components/ProblemStatement/ProblemStatement';
import Editor from '../Components/Editor/Editor'

const HomePage = (props) => {
  return (
    <Box>
        {/* NavBar */}
        <Box><NavBar /></Box>

        {/* Inner Body */}
        <Box h={'99%'} bg={'#1a326dd6'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}>
            <Box w={'99vh'} m={1}><ProbkemStatement /></Box>
            <Box w={'99vh'}><Editor /></Box>
        </Box>
    </Box>
  );
}

export default HomePage;