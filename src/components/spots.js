import React, {useState} from "react"
import Spot from "./spot.js"
import Panorama from "./panorama"
import Carousel from "react-multi-carousel";

const Spots = ({posts, setArticles}) => {
    
    // Set up for Carousel
   
      // end of Carousel set up 

  console.log(posts);
  const [textToShow, setTextToShow] = useState('');
  console.log(textToShow);
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
                {posts.map(article =><div><Panorama id={article.sys.id} article={article} setTextToShow={setTextToShow}/></div>
                    )}
                </Carousel>  </div>
          
    
      {posts.map(article => {
          return (<div class="allspots"> 
          <Spot id={article.sys.id} article={article} setArticles={setArticles} textToShow ={textToShow}/></div>)})
        
}
</div>)
      }


export default Spots
/* Carousel bootstrap: 

<Carousel.Item><Panorama id={article.sys.id} article={article} setTextToShow={setTextToShow}/><Carousel.Caption>{article.fields.title}</Carousel.Caption></Carousel.Item>
            )}
        </Carousel> */