
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';

import { Step } from '@/types/enums';
import styles from '@/styles/progressionBar.module.css';

interface ProgessionBarProps {
    activeStep: Step;
};

const ProgressionBar = (props: ProgessionBarProps) => {
    return (
        <Breadcrumb spacing='5px' separator={<div className={styles.separator}> </div>}>
            <BreadcrumbItem>
                <div className={props.activeStep === Step.Step1 ? styles.selectedItem : styles.item}>Step 1</div>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <div className={props.activeStep === Step.Step2 ? styles.selectedItem : styles.item}>Step 2</div>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <div className={props.activeStep === Step.Step3 ? styles.selectedItem : styles.item}>Step 3</div>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}

export default ProgressionBar;
