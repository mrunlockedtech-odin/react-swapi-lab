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
    if(pageNumber > 1)
    setPageNumber(pageNumber - 1)
  }
  const handleNextButton = () => {
    if(pageNumber < Math.ceil(shipData.count/10))
    setPageNumber(pageNumber + 1)
  }

  return (
    <>
      {starShips.length ? <>
        <div className="nav-buttons">
          <button onClick={handlePrevButton}>Prev</button>
          <button onClick={handleNextButton}>Next</button>
        </div>
        <div className="nav-buttons">
        <p>Page: {pageNumber} of {Math.ceil(shipData.count/10)}</p>
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
        :
        <div className="loading-text">Loading...</div>
      }


    </>
  );
}

export default AllShips;