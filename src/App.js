import "./App.css";
import Search from "./Search";
import City from "./City";
import DateTime from "./DateTime";
import Description from "./Description";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <div className="currentWeather-wrapper">
          <City value="Minnesota" />
          <DateTime value="Feb 28 2021, Sunday, 15:11 CST" />
          <Description city="Minnesota" />
          <CurrentWeather />
        </div>
        <Footer />
      </div>
    </div>
  );
}
