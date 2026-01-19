import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import RightSidebar from './components/RightSidebar';
import UserImage from './assets/userImage.png';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const userName = 'Diksha';

  return (
    <div className="app-container">
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar overlay"
          style={{
            display: isMobile ? 'block' : 'none',
          }}
        />
      )}
      <Header
        userName="Diksha Goel"
        userImage={UserImage}
      />
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <div className={`main-content-wrapper ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="content-area">
          <Dashboard userName={userName} />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
