import Carousel from 'react-bootstrap/Carousel';
import ThreePig from '../Images/8299110.jpg';
import CapeRoja from '../Images/redhood.png';
import FrogPrince from '../Images/frogPrince.png';


    export default function DarkVariantExample() {
        return (
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="object-fit-fill border rounded img-fluid d-block w-100 h-70"
                src={ThreePig}
                alt="First slide"
              />
               <Carousel.Caption >
                <h2 className='text-white bg-dark'>The Three Little Pigs</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="object-fit-fill border rounded img-fluid d-block w-100 h-70"
                src={CapeRoja}
                alt="Second slide"
              />
              <Carousel.Caption >
                <h2 className='text-white bg-dark'>Little Red Riding Hood</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="object-fit-fill border rounded img-fluid d-block w-100 h-70"
                src={FrogPrince}
                alt="Third slide"
              />
              <Carousel.Caption >
                <h2 className='text-white bg-dark'>The Frog Prince</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
      