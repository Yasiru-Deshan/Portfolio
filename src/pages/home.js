import Hero from "./../components/Hero";
import InfoSection from "./../components/InfoSection/index";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "./../components/InfoSection/Data";


function Home() {
  return (
    <div>
      <Hero />
      <InfoSection/>
     

    </div>
  );
}

export default Home;
