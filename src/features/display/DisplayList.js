import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectAllImages } from "../menuItems/menuItemsSlice";

const DisplayList = () => {
    const images = useSelector(selectAllImages);

    return (
        <Row className='ms-auto'>
            {images.map((image) => {
                return (
                    <Col md='5' className='m-4' key={image.id}>
                        <DisplayCard image={image} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default DisplayList;