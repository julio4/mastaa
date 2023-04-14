import { useState } from 'react';
import { useRouter } from "next/router";
import { Heading } from '@chakra-ui/react';
import { Box, SimpleGrid} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import styles from '@/styles/start/options.module.css';
import CustomCard from '../../../components/customCard';

import { Step } from '@/types/enums';

interface QuestionsProps {
    setActiveStep: (step: Step) => void;
};

const Options = (props: QuestionsProps) => {
    const router = useRouter();
    // const [currentLevel, setCurrentLevel] = useState(OnboardingLevel.Level);

    // const updateCurrentLevel = (level: string) => {
    //     if (level) {
    //         if (level.match(/\d+/g)) props.setActiveStep(Step.Step3);
    //         else props.setActiveStep(Step.Step2);

    //         setCurrentLevel(level as OnboardingLevel);
    //     }
    // };

    return (
        <Box className={styles.wrapper}>
            <Heading as='h4' size='lg'>
                Choose if you want to sponsor gas or enable swap
            </Heading>
            <SimpleGrid className={styles.grid} spacing={20} columns={2} paddingX={20}>
                <CustomCard
                    title={'Sponsor'}
                    summary={'Pay gas for your users'}
                    /* il faut mettre un truc onclick ici pour push vers *** avec le routeur */  
                />
                <CustomCard
                    title={'Swap'}
                    summary={'User can pay gas with another token than ETH'}
                    /* pareil ici */
                />
            </SimpleGrid>
        </Box>
    );
}

export default Options;