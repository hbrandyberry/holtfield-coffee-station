import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectAllImages } from "../images/imagesSlice";

const DisplayList = () => {
    const images = useSelector(selectAllImages);

    return (
        <Row>
            {images.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <DisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    )
};

export default DisplayList;