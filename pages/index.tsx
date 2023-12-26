import { Partners } from "Components/Partners/Partners";
import { ContactUs } from "Components/ContactUs/ContactUs";
import { OurMission } from "Components/OurMission/OurMission";
import { PayoRoadmap } from "Components/PayoRoadmap/PayoRoadmap";
import { ReadyToStart } from "Components/ReadyToStart/ReadyToStart";
import { StartForFree } from "Components/StartForFree/StartForFree";
import { WelcomeProduct } from "Components/WelcomeProduct/WelcomeProduct";
import { QuestionAboutUs } from "Components/QuestionsAboutUs/QuestionsAboutUs";
import { QuestionsAboutPlatform } from "Components/QuestionsAboutPlatform/QuestionsAboutPlatform";
import { EasyToUse } from "Components/EasyToUse/EasyToUse";

export default function Home() {
  return (
    <div>
      <WelcomeProduct />
      <OurMission />
      <ReadyToStart />
      <EasyToUse tv={1} />
      <StartForFree />
      <PayoRoadmap />
      <QuestionAboutUs />
      <Partners />
      <QuestionsAboutPlatform />
      <ContactUs />
    </div>
  );
}
