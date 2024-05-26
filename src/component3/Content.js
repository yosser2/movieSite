import Carousel from 'react-bootstrap/Carousel';


function Content() {
    return (
    <Carousel>
        <Carousel.Item>
        <img src='https://phonedroid.com.pk/wp-content/uploads/2023/01/Oppenheimer-1024x576.jpg' style={{width:'100%',height:'100%'}} />
        </Carousel.Item>
        <Carousel.Item>
        <img src='https://i.ytimg.com/vi/J72pBUyjs24/maxresdefault.jpg' style={{width:'100%',height:'100%'}}/>
        </Carousel.Item>
        <Carousel.Item>
        <img src='https://thedirect.s3.amazonaws.com/media/tag_thumbnail/untitled-black-panther-sequel_DC0Z3nz.png' style={{width:'100%',height:'100%'}}/>
        </Carousel.Item>
    </Carousel>
    );
}

export default Content;