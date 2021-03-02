import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Reviews from "./Components/Reviews/Reviews";
import UpcomingShows from "./Components/UpcomingShows/UpcomingShows";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingShows />
      <Reviews />
    </>
  );
}

export default App;
