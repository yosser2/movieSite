import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Series({serie}) {
    let a=serie
    let {id,title,description,rating}=a
    return (
        <Card style={{width:"280px",marginTop:'200px',height:"220px",gap:"10px"}}>
        <Card.Img style={{height:"230px",width:"280px"}} variant="top" src={a.img}/>
        <Card.Body style={{fontFamily:"roboto",fontSize:"17px",color:"white"}}>
        <Link to={`/movies/${id}`} style={{textDecoration:"none",color:"white"}}><Card.Title style={{fontSize:"25px"}}>{title}</Card.Title></Link>
        <Card.Text>{description} </Card.Text>
        <Card.Text>{rating}</Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Series