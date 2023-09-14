import { render, screen } from '@testing-library/react';
import ApartmentProtectedIndex from '../pages/ApartmentProtectedIndex';
import { BrowserRouter } from 'react-router-dom'

describe("<ApartmentProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      password: 'password',
      id: 1
    }
    const userApartments = [
      {
        id: 1,
        street: "Cantebury Lane",
        unit: "43",
        city: "Phoenix",
        state: "AZ",
        square_footage: 2000,
        price: "5000",
        bedrooms: 3,
        bathrooms: 2.5,
        pets: "yes",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fHww&w=1000&q=80",
        user_id: 1
      }
    ]
    render(
      <BrowserRouter>
        <ApartmentProtectedIndex 
          currentUser={currentUser}
          apartments={userApartments}
        />
      </BrowserRouter>
    )
  })
  it("renders without crashing", () => {
    const element = screen.getByText("My Listings")
    expect(element).toBeInTheDocument()
  })
})