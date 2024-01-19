import "./App.css";
import { HeroSection } from "./components/HeroSection";
export const App = () => {
  console.log("weird");
  return (
    <main className="App">
      <HeroSection />

      <section className="section next-section">
        <img
          className="next-image"
          src="https://placedog.net/500"
          alt="Profile Pic"
        />
        <h1 className="header-1"> Beth Miller</h1>
        <p>Portrait Artist</p>
        <p>Based in Leeds</p>
      </section>
    </main>
  );
};
