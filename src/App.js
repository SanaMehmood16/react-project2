
import './App.css';
import Navbar from "./components/nav"
import Card from "./components/card"
import img1 from "../src/images/IMG-20230825-WA0108.jpg"
import loctn from "../src/images/IMG-20230825-WA0112.jpg"
import img2 from "../src/images/IMG-20230825-WA0111.jpg"
import img3 from "../src/images/IMG-20230825-WA0110.jpg"
function App() {
  return (
    <div className="App">
      <Navbar/>
     <div className="card">
     <Card
      imges={img1}
      location={loctn}
      countryname="JAPAN"
      locationtext="view on google map"
      heading="Mountain Fuji"
      date="24 jan,2021- 24jan,2021"
      discription="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
       <Card
      imges={img2}
      location={loctn}
      countryname="A U S T R A L I A"
      locationtext="view on google map"
      heading="Sydney Opera House"
      date="27 May,2021-8 Jun, 2021"
      discription="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
      />
        <Card
      imges={img3}
      location={loctn}
      countryname="N O R W A Y"
      locationtext="view on google map"
      heading="Geirangerfjord"
      date="27 May,2021-8 Jun, 2021"
      discription="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality"
      />
     </div>
    </div>
  );
}

export default App;
