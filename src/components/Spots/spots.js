import React, {useState} from "react"
import Spot from "./spot.js"
import Panorama from "./panorama"
import Carousel from "react-multi-carousel";
import "./style.css";
import New from './controllers/new';
import {Button} from 'react-bootstrap';

const Spots = ({articles, setSpotModified}) => {


  const [textToShow, setTextToShow] = useState('');
  const[isNew, setIsNew] = useState(false);
  const[hideNew, setHideNew] = useState(false);


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
          
    
            <div class="allspots"> {articles.map(article => {return <Spot key={article.id} id={article.id} article={article} setSpotModified={setSpotModified} textToShow ={textToShow}/>})}
            </div>

            <Button 
                variant="green"
                size="xxl"
            onClick={()=>{setIsNew(true);setHideNew(!hideNew)}}>New
            </Button> 

            {isNew?
                (<New hideNew={hideNew} setHideNew={setHideNew} setSpotModified={setSpotModified} />)
                :(<span></span>)
            }

</div>)
      }


export default Spots
