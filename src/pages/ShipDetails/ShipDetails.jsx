import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";


const ShipDetails = () => {
  const [shipDetails, setShipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const shipData = await getDetails(location.state.starship.url)
      setShipDetails(shipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <div className="ship-div">
        <p>NAME: {shipDetails.name}</p>
        <p>MODEL: {shipDetails.model}</p>
        <Link to={'/'}><p>RETURN</p></Link>
      </div>


    </>
  );
}

export default ShipDetails;