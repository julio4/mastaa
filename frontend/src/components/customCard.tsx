
import { Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react';
import styles from '@/styles/components/customCard.module.css';

interface CustomCardProps {
    title: string;
    summary: string;
};

const CustomCard = (props: CustomCardProps) => {
    return (
        <Card className={styles.card}>
            <CardHeader>
                <Heading size='md'> {props.title} </Heading>
            </CardHeader>
            <CardBody>
                <Text> {props.summary} </Text>
            </CardBody>
        </Card>
    );
}

export default CustomCard;