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
               <Carousel.Caption>
                <h2>The Three Little Pigs</h2>
                <p>"The Three Little Pigs" is a fable about three pigs who build their houses of different materials. A Big Bad Wolf blows down the first two pigs' houses which are made of straw and sticks respectively, but is unable to destroy the third pig's house that is made of bricks.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="object-fit-fill border rounded img-fluid d-block w-100 h-70"
                src={CapeRoja}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h2>Little Red Riding Hood</h2>
                <p>Google users
"Little Red Riding Hood" is a European fairy tale about a young girl and a sly wolf. Its origins can be traced back to several pre-17th century European folk tales. </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="object-fit-fill border rounded img-fluid d-block w-100 h-70"
                src={FrogPrince}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h2>The Frog Prince</h2>
                <p>
                "The Frog Prince; or, Iron Henry" is a German fairy tale collected by the Brothers Grimm and published in 1812 in Grimm's Fairy Tales. 
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
      