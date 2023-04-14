import Head from 'next/head';
import Onboarding from './page1';
import ProgressionBar from './progressionBar';
import { Step } from '@/types/enums';


const Home = () => {
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
      <main>
        <ProgressionBar activeStep={activeStep} />
        <Onboarding />
      </main>
    </>
  );
}

export default Home;