import styled from 'styled-components';

export default function Buttons2() {
    return (
        <Wrapper>
            <Button>normal</Button>
            <PrimaryButton>primary</PrimaryButton>
            <OutlineButton>outline</OutlineButton>
            <OutlinePrimaryButton>outline primary</OutlinePrimaryButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
display: flex;
gap: 1em;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    border: none;
`;

const PrimaryButton = styled(Button)`
    background-color: green;
`;

const OutlineButton = styled(Button)`
    border: 1px solid #000;
    color: #000;
    background-color: transparent;
`;

const OutlinePrimaryButton = styled(OutlineButton)`
    border-color: green;
    color: green;
`;