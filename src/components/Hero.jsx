import {
    Card,
    CardBody,
    Text,
    Stack,
    HStack,
    IconButton,
    Image,
} from '@chakra-ui/react';

import {
    FaLinkedin,
    FaTwitter,
    FaMedium,
    FaGithub
} from 'react-icons/fa';

export default function Hero({ name, tagline, avatar }) {
    return (
        <Card 
            direction={{ base: 'column', md: 'row' }}
            align="center"
            size="lg"
            gap={8}
            variant="filled"
            bg="#fbfbfb"
            mb={12}
            p="1em">
                <Stack>
                    <Image boxSize="200px" borderRadius="full" src={avatar} alt={name} />
                    <HStack>
                        <IconButton as="a" href="/" isRound={true} variant="solid" fontSize="20px" icon={<FaMedium />} />
                        <IconButton as="a" href="/" isRound={true} variant="solid" fontSize="20px" icon={<FaLinkedin />} />
                        <IconButton as="a" href="/" isRound={true} variant="solid" fontSize="20px" icon={<FaTwitter />} />
                        <IconButton as="a" href="/" isRound={true} variant="solid" fontSize="20px" icon={<FaGithub />} />
                    </HStack>
                </Stack>
                <CardBody flex="5">
                    <Text fontSize="2xl">{tagline}</Text>
                </CardBody>
        </Card>
    )
}