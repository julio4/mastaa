
import { useState } from 'react';

import { Heading } from '@chakra-ui/react';
import { Box, SimpleGrid} from '@chakra-ui/react';

import styles from '@/styles/onboarding/questions.module.css';
import CustomCard from './customCard';

import { Step } from '@/types/enums';
import * as onboarding from '@/texts/onboarding.json';

enum OnboardingLevel {
    Level = "level",
    Beginner = "beginner",
    Intermediate = "intermediate",
    Advanced = "advanced",
    Beginner1 = "beginner1",
    Beginner2 = "beginner2",
    Beginner3 = "beginner3",
    Intermediate1 = "intermediate1",
    Intermediate2 = "intermediate2",
    Intermediate3 = "intermediate3",
    Advanced1 = "advanced1",
    Advanced2 = "advanced2",
    Advanced3 = "advanced3"
};

interface QuestionsProps {
    setActiveStep: (step: Step) => void;
};

const Questions = (props: QuestionsProps) => {
    const [currentLevel, setCurrentLevel] = useState(OnboardingLevel.Level);

    const updateCurrentLevel = (level: string) => {
        if (level) {
            if (level.match(/\d+/g)) props.setActiveStep(Step.Step3);
            else props.setActiveStep(Step.Step2);

            setCurrentLevel(level as OnboardingLevel);
        }
    };

    return (
        <>
            <Box className={styles.wrapper}>
                <Heading as='h3' size='lg'>
                    {onboarding[currentLevel].title}
                </Heading>
                <SimpleGrid className={styles.grid} spacing={10} columns={3} paddingX={20}>
                    {onboarding[currentLevel].cards.map(infos =>
                        <CustomCard
                            key={infos.title}
                            title={infos.title}
                            summary={infos.summary}
                            footer={infos.footer}
                            onClick={() => updateCurrentLevel(infos.level)}
                        />
                    )}
                </SimpleGrid>
            </Box>
        </>

    );
}

export default Questions;