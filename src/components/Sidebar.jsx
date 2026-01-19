import { useState, useEffect } from 'react';

function Sidebar({ isOpen, onToggle }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [expandedItems, setExpandedItems] = useState({
    alliedServices: false,
    quickLinks: false,
  });

  const toggleExpanded = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const menuItems = [
    { icon: 'bi-house-door', label: 'Dashboard', active: true },
    { icon: 'bi-mortarboard', label: 'Students' },
    { icon: 'bi-file-text', label: 'Applications' },
    { icon: 'bi-search', label: 'Search Courses' },
    { icon: 'bi-wallet2', label: 'Wallet' },
    { icon: 'bi-paypal', label: 'Commission Payments' },
  ];

  const sidebarWidth = '220px';

  return (
    <>
      {/* Shutter/Toggle Button */}
      <button
        className="btn btn-light shadow-sm position-fixed border border-end-0"
        onClick={onToggle}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        style={{
          top: '76px',
          left: isOpen ? sidebarWidth : '0',
          width: '24px',
          height: '32px',
          zIndex: 1200,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          transition: 'left 0.3s ease',
        }}
      >
        <i className={`bi ${isOpen ? 'bi-chevron-left' : 'bi-chevron-right'}`} style={{ fontSize: '0.875rem' }}></i>
      </button>

      <aside
        className="bg-white position-fixed start-0 overflow-auto border-end"
        style={{
          width: sidebarWidth,
          top: '76px',
          height: 'calc(100vh - 76px)',
          zIndex: 1100,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
        }}
        role="complementary"
        aria-label="Main navigation"
      >
      <nav className="d-flex flex-column h-100 py-3">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`d-flex align-items-center px-4 py-2 text-decoration-none ${
              item.active 
                ? 'bg-primary text-white' 
                : 'text-dark'
            }`}
            style={{
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => !item.active && (e.currentTarget.style.backgroundColor = '#f8f9fa')}
            onMouseLeave={(e) => !item.active && (e.currentTarget.style.backgroundColor = 'transparent')}
            aria-current={item.active ? 'page' : undefined}
          >
            <i className={`bi ${item.icon} me-3`} aria-hidden="true"></i>
            <span>{item.label}</span>
          </a>
        ))}

        {/* Allied Services - Expandable */}
        <div>
          <button
            className="w-100 d-flex align-items-center justify-content-between px-4 py-2 text-dark bg-white border-0 text-start"
            onClick={() => toggleExpanded('alliedServices')}
            aria-expanded={expandedItems.alliedServices}
            aria-controls="allied-services-submenu"
            style={{
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-compass me-3" aria-hidden="true"></i>
              <span>Allied Services</span>
            </div>
            <i
              className={`bi bi-chevron-${expandedItems.alliedServices ? 'down' : 'right'}`}
              aria-hidden="true"
            ></i>
          </button>
          {expandedItems.alliedServices && (
            <div id="allied-services-submenu" className="ps-5">
              {/* Add submenu items here if needed */}
            </div>
          )}
        </div>

        <a
          href="#"
          className="d-flex align-items-center px-4 py-2 text-dark text-decoration-none"
          style={{
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <i className="bi bi-book me-3" aria-hidden="true"></i>
          <span>Learning Resources</span>
        </a>

        {/* Quick Links - Expandable */}
        <div>
          <button
            className="w-100 d-flex align-items-center justify-content-between px-4 py-2 text-dark bg-white border-0 text-start"
            onClick={() => toggleExpanded('quickLinks')}
            aria-expanded={expandedItems.quickLinks}
            aria-controls="quick-links-submenu"
            style={{
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-link-45deg me-3" aria-hidden="true"></i>
              <span>Quick Links</span>
            </div>
            <i
              className={`bi bi-chevron-${expandedItems.quickLinks ? 'down' : 'right'}`}
              aria-hidden="true"
            ></i>
          </button>
          {expandedItems.quickLinks && (
            <div id="quick-links-submenu" className="ps-5">
              {/* Add submenu items here if needed */}
            </div>
          )}
        </div>

        <div className="mt-auto px-4 py-2">
          <button className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center">
            <i className="bi bi-chat-left-text me-2" aria-hidden="true"></i>
            <span>Submit feedback</span>
          </button>
        </div>
      </nav>
    </aside>
    </>
  );
}

export default Sidebar;
