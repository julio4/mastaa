
import { useState } from 'react';

import { Step } from '@/types/enums';
import ProgressionBar from './progressionBar';
import Questions from './questions'
import { Box } from '@chakra-ui/react';

import styles from '@/styles/onboarding/onboarding.module.css';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const Onboarding = () => {
    const [activeStep, setActiveStep] = useState(Step.Step1);

    // const updateActiveStep = () => {
    //     if (activeStep === Step.Step3) setActiveStep(Step.Step2);
    //     else setActiveStep(Step.Step1);
    // };

    return (
        <Box className={styles.main}>
            <ProgressionBar activeStep={activeStep} />
            <Questions setActiveStep={setActiveStep} />
            {/* <Box className={styles.chevronIcon} onClick={updateActiveStep}> */}
            <Box className={styles.chevronIcon}>
                <ChevronLeftIcon />
            </Box>
        </Box>
    );
}

export default Onboarding;