import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown, Button } from "@nextui-org/react";


const Nav = () => {
    const menuItems = [
        "Freelancers",
        "Projects",
    ];
    return (
        <>
            <Navbar variant="sticky">
                <Navbar.Brand>
                    <Navbar.Toggle aria-label='toggle navigation' />
                    <Text b color="inherit" hideIn="xs">
                        ACME
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                    {menuItems.map((option) => 
                        <Navbar.Link color={'inherit'} href={'#'}>{option}</Navbar.Link>
                    )}
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </>
    )
}

export default Nav