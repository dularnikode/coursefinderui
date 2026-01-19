import { Table, Tabs, Pagination } from 'react-bootstrap';
import { useState } from 'react';

function ApplicationsTable() {
  const [activeTab, setActiveTab] = useState('pending');

  const applications = [
    {
      ackNo: 'ACK001',
      studentName: 'Rishi Joshi',
      university: 'Sheffield Hallam...',
      program: 'Msc Internatio...',
      pendingSince: '1 Day 12 Dec 2022',
    },
    {
      ackNo: 'ACK002',
      studentName: 'Viren Shah',
      university: 'Sheffield Hallam...',
      program: 'Msc Internatio...',
      pendingSince: '1 Day 12 Dec 2022',
    },
    {
      ackNo: 'ACK003',
      studentName: 'Tushar Joshi',
      university: 'Sheffield Hallam...',
      program: 'Msc Internatio...',
      pendingSince: '1 Day 12 Dec 2022',
    },
  ];

  const tabs = [
    { key: 'pending', label: 'Pending On Me', count: 15 },
    { key: 'lorem1', label: 'Lorem Ipsum', count: 12 },
    { key: 'lorem2', label: 'Lorem Ipsum', count: 18 },
  ];

  return (
    <section className="bg-white rounded-3 p-4 shadow-sm" aria-label="Applications table">
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4 border-bottom"
      >
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.key}
            eventKey={tab.key}
            title={
              <span>
                {tab.label} <span className="badge bg-secondary">{tab.count}</span>
              </span>
            }
          />
        ))}
      </Tabs>

      <div className="table-responsive">
        <Table hover className="mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">Ack. no.</th>
              <th scope="col">Student name</th>
              <th scope="col">University</th>
              <th scope="col">Program</th>
              <th scope="col">Pending Since</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.ackNo}</td>
                <td>{app.studentName}</td>
                <td>{app.university}</td>
                <td>{app.program}</td>
                <td>{app.pendingSince}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev aria-label="Previous page" />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next aria-label="Next page" />
        </Pagination>
      </div>
    </section>
  );
}

export default ApplicationsTable;
