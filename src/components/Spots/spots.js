import React, {useState} from "react"
import Spot from "./spot.js"
import Panorama from "./panorama"
import Carousel from "react-multi-carousel";
import "./style.css";

const Spots = ({articles, setRenameTitle}) => {
    
    // Set up for Carousel
   
      // end of Carousel set up 
  const [textToShow, setTextToShow] = useState('');
  return (
    <div className="spots"> 
    <div className="carousel">
                    <Carousel
                    additionalTransfrom
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={true}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={true}
                    infinite={true}
                    itemClass=""
                    keyBoardControl
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1,
                        partialVisibilityGutter: 120
                        },
                        mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 120
                        },
                        tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1,
                        partialVisibilityGutter: 120
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
        >
                {articles.map(article =><div><Panorama key={article.id} id={article.id} article={article} setTextToShow={setTextToShow}/></div>
                    )}
                </Carousel>  </div>
          
    
            <div class="allspots"> {articles.map(article => {return <Spot key={article.id} id={article.id} article={article} setRenameTitle={setRenameTitle} textToShow ={textToShow}/>})}
            </div>
</div>)
      }


export default Spots
/* Carousel bootstrap: 

<Carousel.Item><Panorama id={article.sys.id} article={article} setTextToShow={setTextToShow}/><Carousel.Caption>{article.fields.title}</Carousel.Caption></Carousel.Item>
            )}
        </Carousel> */