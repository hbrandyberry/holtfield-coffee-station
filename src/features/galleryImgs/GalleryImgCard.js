import {Card, CardImg} from 'reactstrap';

const GalleryImgCard = ({ item }) => {
    const { image, name } = item;

    return (
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                />
            </Card>
    );
};

export default GalleryImgCard;