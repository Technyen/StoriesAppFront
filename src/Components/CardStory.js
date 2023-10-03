import { Button, Container, Row, Col, Card } from "react-bootstrap";

export default function CardStory({story, stories, setStories}) {
const storyQuantity =11;

     
    return (
        <div>
            <Container>
                <Row xs={3}>
                    {[...Array(storyQuantity)].map((e,i) => {
                        return (                    
                    <Col>
                        <Card>
                            <Card.Img top width="100%" src={story.file} />
                            <Card.Body>
                                <Card.Title tag="h5">{story.title}</Card.Title>
                                <Card.Subtitle tag="h6" className="mb-2 text-muted">{story.ageSuggested}</Card.Subtitle>
                                <Card.Text>{story.category}</Card.Text>
                                <Button>Button</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
);
};