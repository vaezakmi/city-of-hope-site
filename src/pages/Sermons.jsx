import { Container, Row, Col, Card } from 'react-bootstrap';

const sermons = [
  {
    title: "Faith in the Fire",
    date: "July 21, 2025",
    preacher: "Rev. Grace Mwangi",
    duration: "42 min",
    videoUrl: "https://www.youtube.com/embed/your-sermon-video-id1",
  },
  {
    title: "Walking in Grace",
    date: "July 14, 2025",
    preacher: "Pastor Daniel K.",
    duration: "38 min",
    videoUrl: "https://www.youtube.com/embed/your-sermon-video-id2",
  },
  {
    title: "Hope for the Hurting",
    date: "July 7, 2025",
    preacher: "Rev. Grace Mwangi",
    duration: "45 min",
    videoUrl: "https://www.youtube.com/embed/your-sermon-video-id3",
  },
];

function Sermons() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-primary">Recent Sermons</h2>
      <Row>
        {sermons.map((sermon, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <div className="ratio ratio-16x9">
                <iframe
                  src={sermon.videoUrl}
                  title={sermon.title}
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>{sermon.title}</Card.Title>
                <Card.Text><small>{sermon.date}</small></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Sermons;
