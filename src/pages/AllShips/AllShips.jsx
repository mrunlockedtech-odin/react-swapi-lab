import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const AllShips = () => {
  const [starShips, setStarShips] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [shipData, setShipData] = useState({})

  useEffect(() => {
    const fetchShipData = async () => {
      const shipData = await getAllStarships(pageNumber)
      setShipData(shipData)
      setStarShips(shipData.results)
    }
    fetchShipData()
  }, [pageNumber])

  const handlePrevButton = () => {
      setPageNumber(pageNumber-1)
  }
  const handleNextButton = () => {
    setPageNumber(pageNumber+1)
  }

  return (
    <>
      <div className="nav-buttons">
        <button onClick={handlePrevButton} disabled={!shipData.previous}>Prev</button>
        <button onClick={handleNextButton} disabled={!shipData.next}>Next</button>
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