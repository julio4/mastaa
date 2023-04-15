import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react'

import { Step } from '@/types/enums'
import styles from '@/styles/progressionBar.module.css'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/rootState'

const ProgressionBar = () => {
  const step = useSelector((state: RootState) => state.step)

  return (
    <Breadcrumb spacing="5px" separator={<div className={styles.separator}> </div>}>
      <BreadcrumbItem>
        <div className={step.value === Step.Step1 ? styles.selectedItem : styles.item}>Step 1</div>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <div className={step.value === Step.Step2 ? styles.selectedItem : styles.item}>Step 2</div>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <div className={step.value === Step.Step3 ? styles.selectedItem : styles.item}>Step 3</div>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default ProgressionBar
