import Head from 'next/head'
import React from 'react'
import Navbar from '../hocs/Nav'
import {Flex, Image, Text, Button, Box} from '@chakra-ui/react'

const Index = () => {
  return (
    <>
      <Head>
        <title>DezyNation</title>
      </Head>
      <Navbar />
      <Flex
      minH={['60vh', '80vh', '100vh']}
      p={[4,16]} bg={"url('cubes.svg') center/cover no-repeat"}
      bgPos={['65% 50%', 'center', 'center']}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      >
        <Text fontSize={[36, 48, 60]} 
        textTransform={'capitalize'}
        fontWeight={600}
        textAlign={'center'}
        >
          find <span style={{color: 'blue'}}>your</span> dream freelance team
        </Text>
        <Text
        my={4}
        textAlign={'center'}
        fontSize={[20,24,28]}
        color={'#555'}
        >
          Hire trustworthy freelancers from all over India for your business project
        </Text>
        <Button my={4} rounded={'full'} size={'lg'} 
        colorScheme={'messenger'} bg={'blue'}
        shadow={'xl'}
        >
          Search Freelancers
        </Button>
      </Flex>

      <Flex 
      h={['auto', '70vh', '80vh']}
      alignItems={'center'}
      direction={['column', 'row']}
      p={[4,16]}
      >
        <Box
        maxW={['full', '50%', '40%']}
        >
          <Text
          fontSize={[24,30,36]}
          fontWeight={600}
          >
            One platform for<br/>
            all your business needs
          </Text>
          <Text my={4}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ex ad fugiat, architecto quae adipisci commodi tempore doloremque culpa consequatur.
          </Text>
        <Button my={4} rounded={'full'} size={'lg'} colorScheme={'teal'} bg={'#222'} _hover={{bg: '#333'}}>
          Search Freelancers
        </Button>
        </Box>
      </Flex>
    </>
  )
}

export default Index