import { Form, Button, Row, Col } from 'react-bootstrap';

function FilterSection() {
  return (
    <section className="bg-white rounded-3 p-3 mb-4 shadow-sm" aria-label="Filter applications">
      <Form>
        <Row className="g-3">
          <Col xs={12} sm={6} md={4}>
            <Form.Select aria-label="Select year">
              <option>Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Form.Select aria-label="Select date created">
              <option>Date Created</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Form.Select aria-label="Select intake">
              <option>Select intake</option>
              <option value="fall">Fall</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <Form.Select aria-label="Select countries">
              <option>Countries</option>
              <option value="uk">UK</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={4}>
            <Button type="submit" variant="light" className="bg-white border border-primary w-100 w-md-auto text-primary">
              Apply Filters
            </Button>
          </Col>
        </Row>
      </Form>
    </section>
  );
}

export default FilterSection;
