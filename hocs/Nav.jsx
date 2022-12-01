import React from 'react'
import {Flex, HStack, Spacer, Image, Text, Button} from '@chakra-ui/react'
import {HiBars3BottomRight} from 'react-icons/hi2'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
        <Flex p={4} 
        pos={'fixed'}
        top={0}
        left={0}
        right={0}
        shadow={'md'} 
        alignItems={'center'} 
        bg={'rgb(255,255,255)'}
        zIndex={99}
        >
            <HStack spacing={2}>
                <Image 
                src='logo.svg'
                w={8}
                />
                <Link href={'/'}>
                    <Text h1 fontSize={20} fontWeight={600}>DezyNation</Text>
                </Link>
            </HStack>
            <Spacer />
            <HStack spacing={6} display={["none", "none", "flex"]}>
                <Link href={'#'}>
                    <Text px={2} py={1} transition={'all .3s ease'} _hover={{bg: 'aqua'}} rounded={10}>Home</Text>
                </Link>
                <Link href={'#'}>
                    <Text px={2} py={1} transition={'all .3s ease'} _hover={{bg: 'aqua'}} rounded={10}>Freelancers</Text>
                </Link>
                <Link href={'#'}>
                    <Text px={2} py={1} transition={'all .3s ease'} _hover={{bg: 'aqua'}} rounded={10}>Projects</Text>
                </Link>
                <Link href={'#'}>
                    <Text px={2} py={1} transition={'all .3s ease'} _hover={{bg: 'aqua'}} rounded={10}>About</Text>
                </Link>
            </HStack>
            <Spacer />
            <Button colorScheme={'teal'} px={6} rounded={36} bg={'#222'} display={["none", "none", "block"]}>
                Sign In
            </Button>
            <Button 
            bg={'none'} 
            _hover={{bg: "none"}} 
            p={0}
            display={["block", "block", "none"]}
            >
                <HiBars3BottomRight fontSize={28} />
            </Button>
        </Flex>
    </>
  )
}

export default Nav