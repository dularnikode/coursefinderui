import { Card, Button } from 'react-bootstrap';
import eventImage from '../assets/eventImage.png';

// Default event data
const defaultEventData = {
  eventName: 'Event Name Goes here',
  eventDate: '7 Jan 2023',
  eventTime: '4:30 PM',
  eventVenue: 'University of New York',
  eventOrganizer: 'Kishori Gupta',
  eventImageUrl: eventImage,
  buttonText: 'Register Now'
};

function UpcomingEvents({ eventData = defaultEventData }) {
  const {
    eventName,
    eventDate,
    eventTime,
    eventVenue,
    eventOrganizer,
    eventImageUrl,
    buttonText
  } = eventData;

  return (
    <Card className="shadow-sm">
      <Card.Header className="bg-white d-flex justify-content-between align-items-center pb-2 mt-2 border-0">
        <h5 className="mb-0 fw-bold">Upcoming Events</h5>
        <div className="d-flex align-items-center gap-1">
          <button
            className="btn btn-link text-dark p-1 m-0"
            aria-label="Previous event"
            style={{ lineHeight: '1' }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="btn btn-link text-dark p-1 m-0"
            aria-label="Next event"
            style={{ lineHeight: '1' }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </Card.Header>
      <Card.Body className="p-3">
        <img
          src={eventImageUrl}
          alt={eventName}
          className="w-100 mb-2"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="flex-grow-1">
            <h6 className="fw-bold mb-1">{eventName}</h6>
            <div className="text-muted small">{eventDate}</div>
          </div>
          <div
            className="bg-light rounded px-3 py-2 text-center ms-3"
            style={{ minWidth: '80px', flexShrink: 0 }}
          >
            <div className="fw-bold" style={{ fontSize: '1.1rem' }}>
              {eventTime.split(' ')[0]}
            </div>
            <div className="small text-muted">{eventTime.split(' ')[1]}</div>
          </div>
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
          <div className="d-flex align-items-center text-muted small">
            <i className="bi bi-geo-alt me-2" aria-hidden="true"></i>
            <span>{eventVenue}</span>
          </div>
          <div className="d-flex align-items-center text-muted small">
            <i className="bi bi-person me-2" aria-hidden="true"></i>
            <span>By {eventOrganizer}</span>
          </div>
        </div>
        <Button variant="primary" className="w-100">
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UpcomingEvents;
