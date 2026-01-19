import { Card, Button, Row, Col } from 'react-bootstrap';

function SummaryCards() {
  const cards = [
    {
      title: '18',
      subtitle: 'Conditional',
      variant: 'primary',
      buttonText: 'Offer letter',
    },
    {
      title: '22',
      subtitle: 'Un-Conditional',
      variant: 'success',
      buttonText: 'Offer letter',
    },
    {
      title: '30',
      subtitle: 'Payment Received',
      variant: 'warning',
      buttonText: 'All Country',
    },
    {
      title: '8',
      subtitle: 'Payment Received',
      variant: 'danger',
      buttonText: 'Offer letter',
    },
    {
      title: '8',
      subtitle: 'VISA Received',
      variant: 'secondary',
      buttonText: 'Offer letter',
    },
  ];

  return (
    <section aria-label="Application summary statistics">
      <Row className="g-3 mb-4">
        {cards.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={4} xl>
            <Card className={`border-0 shadow-sm h-100 bg-${card.variant} bg-opacity-10`}>
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">
                  <h2 className={`text-${card.variant} mb-0 fw-bold`}>{card.title}</h2>
                  <p className="text-muted mb-0 small">{card.subtitle}</p>
                </div>
                <Button variant={card.variant} size="sm" className="mt-auto align-self-start">
                  {card.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default SummaryCards;
