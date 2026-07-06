import Head from "next/head";
import type { NextPage } from "next";
import LayoutMain from "../libs/components/layout/LayoutMain";
import PcHomeHero from "../libs/components/homepage/pc/PcHomeHero";
import MobileHomeHero from "../libs/components/homepage/mobile/MobileHomeHero";
import useDeviceDetect from "../libs/hooks/useDeviceDetect";

const Home: NextPage = () => {
  const device = useDeviceDetect();

  return (
    <>
      <Head>
        <title>자격증공장 | The Proof of Potential</title>
        <meta
          name="description"
          content="부산의 프리미엄 학습 공간 자격증공장. 공부만 하면 되는 환경과 집중을 위한 시스템을 만듭니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {device === "mobile" ? <MobileHomeHero /> : <PcHomeHero />}
    </>
  );
};

export default LayoutMain(Home);
