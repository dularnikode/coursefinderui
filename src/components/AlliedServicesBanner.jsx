import { Card, Button } from 'react-bootstrap';
import PersonImage from '../assets/stockImgeAlliedServices.png';

function AlliedServicesBanner() {
  return (
    <section
      className="text-white rounded-3 p-4 my-4 position-relative overflow-hidden" 
      style={{ background: 'linear-gradient(to left, #00163e, #164fb7)' }}
      aria-label="Overseas Education Loans">
      <div className="row align-items-center">
        <div className="col-md-8">
          <div className="h6 fw-bold mb-3" role="heading" aria-level="1">Allied Services</div>
          <h3 className="fw-bold mb-3">Overseas Education Loans</h3>
          <p className="mb-4">
            Provide end to end overseas education loan assistance to your students
            to help them achieve their goal
          </p>
          <Button variant="light" className="fw-semibold">
            Get Started
          </Button>
        </div>
        <div className="col-md-4 text-center d-none d-md-block">
          <div
            className="rounded-circle d-inline-flex align-items-center justify-content-center"
          >
            <img src={PersonImage} alt="Person Image Holding Books" style={{width : '200px' ,height : "200px"}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlliedServicesBanner;
