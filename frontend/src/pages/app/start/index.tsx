
import { useState } from 'react';

import { Step } from '@/types/enums';
import Options from './options';
import { Box } from '@chakra-ui/react';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import ContractAddress from './contractAddress';

import styles from '@/styles/page1/index.module.css';
import Layout from '..';

const Start = () => {
    const [activeStep, setActiveStep] = useState(Step.Step1);

    // const updateActiveStep = () => {
    //     if (activeStep === Step.Step3) setActiveStep(Step.Step2);
    //     else setActiveStep(Step.Step1);
    // };

    return (
        <Layout>
            <Box className={styles.main}>
                <ContractAddress />
                <Options setActiveStep={setActiveStep} />
                {/* <Box className={styles.chevronIcon} onClick={updateActiveStep}> */}
                <Box className={styles.chevronIcon}>
                    <ChevronLeftIcon />
                </Box>
            </Box>
        </Layout>
    );
}

export default Start;