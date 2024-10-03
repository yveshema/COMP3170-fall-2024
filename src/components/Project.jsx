import {
    Card,
    CardBody,
    Image,
    Heading,
    Text
} from '@chakra-ui/react';

export default function Project({ image, title, description }) {
    return (
        <Card 
            direction={{ base: 'column', md: 'row' }}
            mt={8}
            p={2}
            gap={4}
        >
            <Image 
                src={image}
                maxW={{ base: '100%', md: '300px' }}
                objectFit="contain"
            />
            <CardBody pt={0}>
                <Heading as="h3" size="md" mb={4}>{title}</Heading>
                <Text fontSize="lg">{description}</Text>
            </CardBody>
        </Card>
    );
}