import { useState } from 'react'; // Removed useEffect import
import './App.css';

function App() {
  // State for milk quantity for yogurt
  const [milkQuantity, setMilkQuantity] = useState('');

  // Calculate sugar needed for yogurt
  const intermediate1 = milkQuantity ? parseFloat(milkQuantity) * 4.1 : 0;
  const sugarForYogurt = milkQuantity ? intermediate1 * 7.7 : 0;

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
                className="form-control form-control-lg text-center input-responsive-font"
                id="milkQuantity"
                value={milkQuantity}
                onChange={(e) => setMilkQuantity(e.target.value)}
                placeholder="숫자 예: 440"
              />
            </div>
            <div className="col-12">
              <label className="form-label fs-3">필요한 설탕 (kg)</label>
              <p className="form-control-plaintext fw-bold fs-extra-large">{(Math.floor((sugarForYogurt / 1000) * 100) / 100).toFixed(2)}kg</p>
              <table style={{color: '#888', width: '60%', margin: '0 auto'}}>
                  <tbody>
                    <tr>
                      <td style={{width: '1%', whiteSpace: 'nowrap'}}>1차 계산</td>
                      <td style={{width: '1%', padding: '0 0.5rem'}}>:</td>
                      <td style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <span>{milkQuantity}L * </span>
                        <span style={{marginLeft: '0.5rem'}}>4.1</span>
                      </td>
                      <td style={{width: '1%', padding: '0 1rem'}}>=</td>
                      <td style={{textAlign: 'right'}}>{intermediate1.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td style={{width: '1%', whiteSpace: 'nowrap'}}>2차 계산</td>
                      <td style={{width: '1%', padding: '0 0.5rem'}}>:</td>
                      <td style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <span>{intermediate1.toFixed(2)} * </span>
                        <span style={{marginLeft: '0.5rem'}}>7.7</span>
                      </td>
                      <td style={{width: '1%', padding: '0 1rem'}}>=</td>
                      <td style={{textAlign: 'right'}}>{sugarForYogurt.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
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