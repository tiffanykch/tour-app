import React, {useState} from "react";
import Gallery from "./components/Gallery";

// Root component of the app
function App () {
  // Global state to hold the list of tours
  const [tours, setTours] = useState([]);

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter(tour => tour.id !== id));
  };

  return (
    <main>
      <h1>Tours Explorer</h1>
      
      {/* Pass state and handlers down to the Gallery component */}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;