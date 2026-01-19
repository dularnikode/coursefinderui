import { Card } from 'react-bootstrap';

function QuickLinks() {
  const links = [
    'Learning Resourses',
    'Learning Resourses',
    'Learning Resourses',
    'Learning Resourses',
    'Learning Resourses',
  ];

  return (
    <div>
      <div className='mb-3'>
        <h5 className="mb-0 fw-bold">Quick Links</h5>
      </div>
      <div>
        <div className="d-flex flex-column gap-3">
          {links.map((link, index) => (
            <div
              key={index}
              className="border bg-white rounded d-flex justify-content-between align-items-center p-3 p-sm-2"
              style={{ cursor: 'pointer' }}
            >
              <a
                href="#"
                className="text-primary text-decoration-underline ms-3"
                style={{ textDecoration: 'underline' }}
              >
                {link}
              </a>
              <i className="bi bi-box-arrow-up-right text-muted" aria-hidden="true"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
