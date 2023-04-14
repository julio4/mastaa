import { useState } from 'react';

import { Step } from '@/types/enums';
import { Box } from '@chakra-ui/react';

import styles from '@/styles/start/index.module.css';
import Layout from '..';

const Sybil = () => {
    const [activeStep, setActiveStep] = useState(Step.Step2);

    return (
        <Layout>
            <Box className={styles.main}>

            </Box>
        </Layout>
    );
}

export default Sybil;