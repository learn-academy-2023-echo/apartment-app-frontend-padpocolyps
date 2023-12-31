import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"

const Navigation = ({current_user, logout}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/")
  }
  return (
    <>
      <Nav className="nav">
        <NavItem>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/apartmentindex" className="nav-link">View Listings</NavLink>
        </NavItem>
        {current_user && (
          <>
            <NavItem>
              <NavLink to="/myapartments" className="nav-link">My Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew" className="nav-link">Create Listing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" onClick={handleClick}>Log Out</NavLink>
            </NavItem>
          </>
        )}
        {!current_user && (
          <>
            <NavItem>
              <NavLink to="/login" className="nav-link">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
          </NavItem>
          </>
        )}
      </Nav>
    </>
  )
}

export default Navigation