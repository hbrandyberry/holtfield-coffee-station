import { Container } from "reactstrap";
import GalleryImgsList from "../features/galleryImgs/GalleryImgsList";
import SubHeader from "../components/SubHeader";

const GalleryPage = () => {
    return (
        <Container>
            <SubHeader current='Gallery' />
            <GalleryImgsList />
        </Container>
    );
};

export default GalleryPage;