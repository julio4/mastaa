import Head from 'next/head';
import ProgressionBar from './progressionBar';
import { Step } from '@/types/enums';
import { ReactNode } from "react";

import styles from '@/styles/home.module.css';
// import Navbar from '../../components/navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const activeStep = Step.Step1;
  return (
    <>
      <Head> {/* Todo */}
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <ProgressionBar activeStep={activeStep} />
        {children}
      </main>
    </>
  );
}

export default Layout;