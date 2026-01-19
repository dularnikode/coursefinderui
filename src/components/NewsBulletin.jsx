import { Card } from 'react-bootstrap';

function NewsBulletin() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h5 className="mb-3 fw-bold">News Bulletin</h5>
        <div className="d-flex gap-3 mb-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #e9ecef',
            }}
          >
            <i className="bi bi-file-text text-primary fs-5" aria-hidden="true"></i>
          </div>
          <div className="flex-grow-1">
            <h6 className="fw-bold mb-2">Indian student tops harward!</h6>
            <p className="text-muted small mb-2">
              Indian student tops harward university and makes history. Its the first time for an Indian student to do this.{' '}
              <a href="#" className="text-primary text-decoration-underline">
                Read More
              </a>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2">
          <div
            className="rounded-circle"
            style={{ 
              width: '8px', 
              height: '8px',
              backgroundColor: '#6c757d'
            }}
            aria-label="Page 1"
          ></div>
          <div
            className="rounded-circle"
            style={{ 
              width: '8px', 
              height: '8px',
              backgroundColor: '#dee2e6'
            }}
            aria-label="Page 2"
          ></div>
          <div
            className="rounded-circle"
            style={{ 
              width: '8px', 
              height: '8px',
              backgroundColor: '#dee2e6'
            }}
            aria-label="Page 3"
          ></div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewsBulletin;
