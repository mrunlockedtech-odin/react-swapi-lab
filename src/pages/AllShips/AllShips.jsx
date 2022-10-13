import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const AllShips = () => {
  const [starShips, setStarShips] = useState([])
  const [pageNumber, setPageNumber] = useState()

  useEffect(() => {
    const fetchShipData = async () => {
      const shipData = await getAllStarships()
      setStarShips(shipData.results)
    }
    fetchShipData()
  }, [])

  return (
    <>
      <div className="nav-buttons">
        <button>Prev</button>
        <button>Next</button>
      </div>
      <div className="icon-container">
        {starShips.map(starship =>
          <Link to='/starship' state={{ starship }} key={starship.name}>
            <div className="class-div">
              {starship.name}
            </div>
          </Link>
        )}
      </div>
    </>
  );
}

export default AllShips;