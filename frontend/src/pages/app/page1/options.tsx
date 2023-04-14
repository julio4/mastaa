
import { useState } from 'react';

import { Heading } from '@chakra-ui/react';
import { Box, SimpleGrid} from '@chakra-ui/react';

import styles from '@/styles/page1/options.module.css';
import CustomCard from '../../../components/customCard';

import { Step } from '@/types/enums';

interface QuestionsProps {
    setActiveStep: (step: Step) => void;
};

const Options = (props: QuestionsProps) => {
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
            <Heading as='h3' size='lg'>
                Titre explicatif ici
            </Heading>
            <SimpleGrid className={styles.grid} spacing={20} columns={2} paddingX={20}>
                <CustomCard
                    title={'Sponsor with ETH'}
                    summary={'summary ?'}
                />
                <CustomCard
                    title={'Allow user to user another token'}
                    summary={'summary ?'}
                />
            </SimpleGrid>
        </Box>
    );
}

export default Options;