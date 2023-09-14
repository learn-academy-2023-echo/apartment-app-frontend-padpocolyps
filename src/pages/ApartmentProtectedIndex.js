import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from "react-router-dom"

const ApartmentProtectedIndex = ({ apartments, currentUser}) => {
    // currentUser.id === apartment.user_id
    const myApartments = apartments.filter(apartment => currentUser.id === apartment.user_id)
    console.log(myApartments)
  return (
    <>
    <div className='apartments-body'>
    <h2>My Listings</h2>
    <div className='flex-apartments'>
          {myApartments?.map((apartment, index) => {
            return(
                <Card key={index} className='apartment-cards'>
                  <CardImg top width="100%" src={apartment.image} alt="" className="apartment-picture"/>
                  <CardBody>
                    <div className="apartment-text">
                      <CardTitle><b>${apartment.price}/month</b></CardTitle>
                      <CardSubtitle>{apartment.street}, {apartment.city}, {apartment.state}</CardSubtitle>
                      <CardSubtitle>{apartment.bedrooms} Bedroom {apartment.bathrooms}, Bath</CardSubtitle>
                    </div>
                    <NavLink to={`/apartmentshow/${apartment.id}`} className="nav-link">
                      <Button className='apartment-button'>More Details</Button>
                    </NavLink>
                  </CardBody>
                </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ApartmentProtectedIndex