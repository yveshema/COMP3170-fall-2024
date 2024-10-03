import {
    Stack,
    Heading,
    Text
} from '@chakra-ui/react';

export default function Achievement({ title, description, date }) {
    return (
        <Stack mt={6}>
            <Heading as="h3" size="md">{title}</Heading>
            <Text>{date}</Text>
            <Text fontSize="lg">{description}</Text>
        </Stack>
    );
}