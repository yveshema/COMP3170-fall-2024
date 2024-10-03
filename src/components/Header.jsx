import {
    Link,
    Heading,
    Flex,
    HStack,
    Box,
} from '@chakra-ui/react';

export default function Header({ name }) {
    return (
        <Box 
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                zIndex: '999',
            }}
            w='100%'
            bg='white'
            pb={6}>
                <Flex justify='space-between' w='80%' m='auto'>
                    <Heading>
                        <Link href="/" style={{ textDecoration: 'none'}}>{name}</Link>
                    </Heading>
                    <HStack spacing={6} align='end'>
                        <Link href="/">Home</Link>
                        <Link href="#about">About</Link>
                        <Link href="#achievements">Achievements</Link>
                        <Link href="#projects">Portfolio</Link>
                        <Link href="#contact-form">Contact</Link>
                    </HStack>
                </Flex>
        </Box>
    );
}