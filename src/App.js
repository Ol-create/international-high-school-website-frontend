import logo from './logo.svg';
import NavBar from './component/NavBar';
import Carousel from './component/Carousel';
import './App.css';

const images = [
  "/images/carousel/image1.png",
  "/images/carousel/image2.png",
  "/images/carousel/image3.gif",
  "/images/carousel/image4.png",
  "/images/carousel/image5.png",
  "/images/carousel/image6.png",
  "/images/carousel/image7.png",
];

function App() {
  return (
    <div className="App">
      <NavBar />
     <Carousel images={images}/>
    </div>
  );
}

export default App;
