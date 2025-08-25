import {
  AboutBanner,
  BestProgress,
  BetterIdeas,
  BusinessProgress,
  OurClients,
  Quote,
} from "@/components";

const AboutUs = () => {
  return (
    <>
      <AboutBanner />
      <div className="lg:!px-40 px-8 mb-12 flex flex-col gap-y-28">
        <BusinessProgress />
        <BetterIdeas />
        <Quote />
        <BestProgress />
        <OurClients />
      </div>
    </>
  );
};

export default AboutUs;
