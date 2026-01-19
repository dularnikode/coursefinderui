import { Card } from 'react-bootstrap';
import userImage from '../assets/userImage.png';

function ContactManager() {
  const managers = [
    {
      name: 'Santosh Sharma',
      phone: '+91 9876543210',
      location: 'Hyderabad',
      email: 'sshatmal123@kcoverseas.com',
    },
    {
      name: 'Santosh Sharma',
      phone: '+91 9876543210',
      location: 'Hyderabad',
      email: 'sshatmal123@kcoverseas.com',
    },
    {
      name: 'Santosh Sharma',
      phone: '+91 9876543210',
      location: 'Hyderabad',
      email: 'sshatmal123@kcoverseas.com',
    },
  ];

  return (
    <div>
      <div className='mb-3'>
        <h5 className="mb-0 fw-bold">Contact Regional Manager</h5>
      </div>
      <div>
        <div className="d-flex flex-column gap-3">
          {managers.map((manager, index) => (
            <div
              key={index}
              className="bg-white border rounded d-flex align-items-center gap-3 p-2"
            >
              <img
                src={userImage}
                alt={manager.name}
                className="rounded-circle flex-shrink-0"
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1 text-primary">{manager.name}</h6>
                <div className="text-muted small mb-1">
                  {manager.phone} | {manager.location}
                </div>
                <div className="text-muted small">
                  {manager.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactManager;
