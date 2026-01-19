import FilterSection from './FilterSection';
import SummaryCards from './SummaryCards';
import ApplicationsTable from './ApplicationsTable';
import AlliedServicesBanner from './AlliedServicesBanner';

function Dashboard({ userName }) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good Morning' : currentHour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <main className="main-content">
      <div className="mb-4 greeting-container">
        <h1 className="h3">
           Hey, {greeting} <span className='fw-bold'>{userName}!</span>
        </h1>
      </div>

      <FilterSection />
      <SummaryCards />
      <ApplicationsTable />
      <AlliedServicesBanner />
    </main>
  );
}

export default Dashboard;
