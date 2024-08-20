import React from 'react';
import './Pets.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

export default function Pets() {
const navigate = useNavigate();

const handleBack = () => {
  navigate('/profile');
};
  return (
    <div>
      <h1><b>Pets</b></h1>
      <form action="#">
        <table className="Pets-table">
          <tbody>
            <tr className="radio-item">
              <td>
                <input type="radio" name="pet" id="pet" />
              </td>
              <td>
                <label htmlFor="pet">I love pets. Woof!</label>
              </td>
            </tr>
            <tr className="radio-item">
              <td>
                <input type="radio" name="animal" id="animal" />
              </td>
              <td>
                <label htmlFor="animal">I'll travel with pets depending on the animal</label>
              </td>
            </tr>
            <tr className="radio-item">
              <td>
                <input type="radio" name="travel" id="travel" />
              </td>
              <td>
                <label htmlFor="travel">I'd prefer not to travel with pets</label>
              </td>
            </tr>
            <tr>
              <td><button type="submit">Save</button></td>
              <td><button type="button" onClick={handleBack}>Back</button></td>
            </tr>
          </tbody>
        </table>

        <br />
        
      </form>
    </div>
  );
}
