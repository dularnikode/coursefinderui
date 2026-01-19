import { Card, Button, ListGroup } from 'react-bootstrap';
import NewsBulletin from './NewsBulletin';
import UpcomingEvents from './UpcomingEvents';
import QuickLinks from './QuickLinks';
import ContactManager from './ContactManager';

function RightSidebar() {
  return (
    <aside className="right-sidebar d-flex flex-column gap-3" role="complementary" aria-label="Additional information">
      <div className="d-flex flex-column flex-sm-row gap-2">
        <Button variant="light" className="bg-white flex-grow-1 border border-primary text-primary">
          Refresh Dashboard
        </Button>
        <Button variant="primary" className="flex-grow-1 border border-primary text-white">
          Register Student
        </Button>
      </div>

      <NewsBulletin />
      <UpcomingEvents />
      <QuickLinks />
      <ContactManager />
    </aside>
  );
}

export default RightSidebar;
