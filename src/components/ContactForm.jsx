import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Checkbox,
    useToast,
} from '@chakra-ui/react';


export default function ContactForm() {

    const toast = useToast();

    function handleSubmit(e) {
        e.preventDefault();

        // form submission logic
        const formData = new FormData(e.target);
        const data = [...formData.entries()];

        toast({
            title: 'Message sent!',
            description: JSON.stringify(data, null, 2),
            status: "success",
            duration: 5000,
            isClosable: true,
        });

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Email:</FormLabel>
                <Input type="email" name="email" placeholder="Your email address" />
            </FormControl>
            <FormControl>
                <FormLabel>Subject:</FormLabel>
                <Input type="text" name="subject" />
            </FormControl>
            <FormControl>
                <FormLabel>Message:</FormLabel>
                <Textarea name="message" placeholder="Enter your message ..." />
            </FormControl>
            <FormControl>
                <Checkbox size="lg">Subscribe to my newsletter</Checkbox>
            </FormControl>
            <Button mt={2} type="submit" colorScheme="blue">Send</Button>
        </form>
    );
}