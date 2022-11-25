import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import GalleryImgCard from "./GalleryImgCard";
import { selectAllGalleryImgs } from "./galleryImgsSlice";

const GalleryImgsList = () => {
    const galleryImgs = useSelector(selectAllGalleryImgs);

    return (
        <Row className='ms-auto'>
            {galleryImgs.map((item, idx) => {
                return (
                    <Col md='5' className='m-1' key={idx}>
                        <GalleryImgCard item={item} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default GalleryImgsList;