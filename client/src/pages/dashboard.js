import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  return (
    <div className="container py-4">
      {/* 1. Header */}
      <h1 className="text-center py-4">Welcome to the Dashboard</h1>

      {/* 2. Your Stat Card */}
      <div className="card shadow-sm border-0 mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <p className="text-uppercase text-muted mb-0 small">Total Revenue</p>
              <h2 className="mb-0 fw-bold">$45,231</h2>
            </div>
            <div className="bg-primary text-white rounded-circle p-3">
              <i className="bi bi-currency-dollar"></i>
            </div>
          </div>
          <div className="mt-3">
            <span className="text-success small"><i className="bi bi-arrow-up"></i> 12%</span>
            <span className="text-muted small"> Since last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
