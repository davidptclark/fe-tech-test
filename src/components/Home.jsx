import AboutUsSummary from "./AboutUsSummary";
import Carousel from "./Carousel";
import LoginSummary from "./LoginSummary";
import ContactUsSummary from "./ContactUsSummary";

export default function Home() {
  return (
    <div>
      <Carousel />
      <AboutUsSummary />
      <LoginSummary />
      <ContactUsSummary />
    </div>
  );
}
