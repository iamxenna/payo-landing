import { BecomePartners } from "Components/BecomePartners/BecomePartners";
import { ContactUs } from "Components/ContactUs/ContactUs";
import { MeetOurTeam } from "Components/MeetOurTeam/MeetOurTeam";
import { MoreAboutPlatform } from "Components/MoreAboutPlatform/MoreAboutPlatform";
import { OurMission } from "Components/OurMission/OurMission";
import { Partners } from "Components/Partners/Partners";
import { PayoRoadmap } from "Components/PayoRoadmap/PayoRoadmap";
import { QuestionAboutUs } from "Components/QuestionsAboutUs/QuestionsAboutUs";
import { WelcomeTeam } from "Components/WelcomeTeam/WelcomeTeam";

export default function AboutUs() {
  return (
    <div>
      <WelcomeTeam />
      <QuestionAboutUs withoutTitle={true} />
      <OurMission />
      <MoreAboutPlatform />
      <Partners />
      <BecomePartners />
      <PayoRoadmap />
      <MeetOurTeam />
      <ContactUs />
    </div>
  );
}
