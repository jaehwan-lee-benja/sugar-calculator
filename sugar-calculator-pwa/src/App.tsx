import { useState } from 'react'; // Removed useEffect import
import './App.css';

function App() {
  // State for milk quantity for yogurt
  const [milkQuantity, setMilkQuantity] = useState('');

  // Calculate sugar needed for yogurt
  const sugarForYogurt = milkQuantity ? parseFloat(milkQuantity) * 4 : 0;

  // Function to handle page refresh
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      {/* Yogurt Sugar Calculator Section */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-12 mb-3">
              <label htmlFor="milkQuantity" className="form-label fs-3">우유 양 (L)</label> {/* Changed from ml to L */}
              <input
                type="number"
                className="form-control form-control-lg"
                id="milkQuantity"
                value={milkQuantity}
                onChange={(e) => setMilkQuantity(e.target.value)}
                placeholder="예: 440"
              />
            </div>
            <div className="col-12">
              <label className="form-label fs-3">필요한 설탕 (g)</label>
              <p className="form-control-plaintext fw-bold fs-extra-large">{sugarForYogurt.toFixed(2)}g</p>
            </div>
          </div>
        </div>
      </div>

      {/* Refresh Button */}
      <div className="d-grid gap-2 mt-4">
        <button
          className="btn btn-secondary btn-lg"
          onClick={handleRefresh}
        >
          새로고침
        </button>
      </div>
      <h2 className="mt-5 text-center fs-3"> {/* Added mt-5 for spacing */}
        하네뜨<br />
        플레인 요거트<br />
        설탕양 계산기
      </h2>
    </div>
  );
}

export default App;
