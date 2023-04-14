
import { Card, CardHeader, Heading, CardBody, CardFooter, Text, Button } from '@chakra-ui/react';
import styles from '@/styles/onboarding/customCard.module.css';

interface CustomCardProps {
    title: string;
    summary: string;
    footer: string;
    onClick: () => void;
};

const CustomCard = (props: CustomCardProps) => {
    return (
        <Card className={styles.card} onClick={props.onClick}>
            <CardHeader>
                <Heading size='md'> {props.title} </Heading>
            </CardHeader>
            <CardBody>
                <Text> {props.summary} </Text>
            </CardBody>
            <CardFooter>
                <Button> {props.footer} </Button>
            </CardFooter>
        </Card>
    );
}

export default CustomCard;