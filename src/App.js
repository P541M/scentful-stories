import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import FragrancePicks from "./components/FragrancePicks";
import RachelRuston from "./components/profiles/RachelRuston";
import Vocab from "./components/Vocab";

const profileComponents = {
  "rachel-ruston": RachelRuston,
};

function ProfileLoader() {
  const { profileId } = useParams();
  const ProfileComponent = profileComponents[profileId];

  return ProfileComponent ? <ProfileComponent /> : <p>Profile not found</p>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stories" element={<FragrancePicks />} />
        <Route path="/stories/:profileId" element={<ProfileLoader />} />
        <Route path="/vocab" element={<Vocab />} />
      </Routes>
    </Router>
  );
}

export default App;
