import { Card, CardImg } from "reactstrap";

const DisplayCard = ({ item }) => {
    const { image, name } = item;

    return (
        <Card>
            <CardImg src={image} alt={name} />
        </Card>
    )
};

export default DisplayCard;