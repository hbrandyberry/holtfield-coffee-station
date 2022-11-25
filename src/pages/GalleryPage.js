import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

const GalleryPage = () => {
    return (
        <Container>
            <SubHeader current='Gallery' />
            <h1>Gallery</h1>
        </Container>
    );
};

export default GalleryPage;