import { useState } from 'react';
import { Form, Dropdown } from 'react-bootstrap';

function Header({ userName, userImage }) {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="bg-primary shadow-sm border-bottom position-fixed top-0 start-0 w-100" style={{ zIndex: 1100 }}>
      <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3">
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand fw-bold text-white fs-4" href="#">
            coursefinder.ai
          </a>
          
          {/* Desktop: Search - Always visible */}
          <Form className="d-none d-lg-flex flex-grow-1 mx-4">
            <Form.Control
              type="search"
              placeholder="Search by student name, ack no."
              className="me-2"
              aria-label="Search"
            />
          </Form>
          
          <div className="d-flex align-items-center gap-2 ms-auto">
            {/* Search Toggle Button - Mobile only */}
            <button
              className="btn btn-link text-white d-lg-none p-2"
              type="button"
              onClick={() => setSearchExpanded(!searchExpanded)}
              aria-controls="navbarSearch"
              aria-expanded={searchExpanded}
              aria-label="Toggle search"
            >
              <i className={`bi ${searchExpanded ? 'bi-x-lg' : 'bi-search'}`} style={{ fontSize: '1.25rem' }}></i>
            </button>

            {/* Desktop: Show What's New, Notifications, and User */}
            <div className="d-none d-lg-flex align-items-center gap-3">
              <button
                className="btn btn-link text-decoration-none text-white d-flex align-items-center"
                aria-label="What's New"
              >
                <i className="bi bi-chat-square-text me-1"></i>
                <span>Whats New?</span>
              </button>
              
              <button
                className="btn btn-link text-decoration-none text-white position-relative"
                aria-label="Notifications"
              >
                <i className="bi bi-bell fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                  <span className="visually-hidden">unread notifications</span>
                </span>
              </button>

              <div className="d-flex align-items-center">
                <img
                  src={userImage}
                  alt={`${userName} profile`}
                  className="rounded me-2"
                  width="40"
                  height="40"
                  style={{ objectFit: 'cover' }}
                />
                <span className="fw-medium text-white">{userName}</span>
              </div>
            </div>

            {/* Mobile: User Icon with Dropdown */}
            <div className="d-lg-none">
              <Dropdown show={userMenuOpen} onToggle={setUserMenuOpen} align="end">
                <Dropdown.Toggle
                  as="button"
                  className="btn btn-link text-white p-0 border-0"
                  style={{
                    background: 'none',
                    outline: 'none',
                  }}
                >
                  <img
                    src={userImage}
                    alt={`${userName} profile`}
                    className="rounded"
                    width="40"
                    height="40"
                    style={{ objectFit: 'cover' }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-2" style={{ minWidth: '200px' }}>
                  <Dropdown.Item
                    className="d-flex align-items-center"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <i className="bi bi-chat-square-text me-2"></i>
                    <span>Whats New?</span>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    className="d-flex align-items-center position-relative"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <i className="bi bi-bell me-2"></i>
                    <span>Notifications</span>
                    <span className="position-absolute end-0 me-3 badge rounded-pill bg-danger">
                      2
                      <span className="visually-hidden">unread notifications</span>
                    </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
