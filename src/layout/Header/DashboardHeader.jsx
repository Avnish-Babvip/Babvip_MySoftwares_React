import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { customerLogout } from '../../features/actions/authentication';

const DashboardHeader = ({ onHamburgerClick }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === 'true'
      ? import.meta.env.VITE_ASSETS
      : ''
  }`;

  const dispatch = useDispatch()
  const { customer } = useSelector((state) => state.authentication.customerData);
  const {customerData}= useSelector((state)=>state.authentication)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-100 z-10 p-3 pe-4 bg-white">
      <div className="d-flex justify-content-between align-items-center">
        {/* Hamburger icon only on small screens */}
        <button
          className="border-0 bg-white d-md-none"
          onClick={onHamburgerClick}
        >
          <img
            src={`${assetRoute}/assets/img/dashboardIcons/menu.png`}
            alt="Menu"
            style={{ width: '28px', height: '28px' }}
          />
        </button>

        <div className="d-flex align-items-center gap-4 ms-auto" ref={dropdownRef}>
          <img
            src={`${assetRoute}/assets/img/dashboardIcons/bell_icon.svg`}
            className="img-fluid"
            alt="Notifications"
            style={{ height: '18px', width: '24px', cursor: 'pointer' }}
          />
          <img
            src={`${assetRoute}/assets/img/dashboardIcons/Chat.svg`}
            className="img-fluid"
            alt="Chat"
            style={{ height: '18px', width: '24px', cursor: 'pointer' }}
          />
          
          {/* Profile with dropdown */}
          <div className="position-relative">
            <div
              className="d-flex align-items-center gap-2"
              style={{ cursor: 'pointer' }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={`${assetRoute}/assets/img/dashboardIcons/profile.jpg`}
                height={40}
                width={40}
                className="rounded-circle"
                alt="Profile"
              />
              <span className="fw-semibold text-black">
                {customer?.first_name} {customer?.last_name}
              </span>
            </div>

            {dropdownOpen && (
              <div className="dropdown-menu show mt-2 p-2 shadow rounded-3" style={{ right: 0, left: 'auto', minWidth: '160px', position: 'absolute' }}>
                <Link to="/" className="dropdown-item">Back to Main Site</Link>
                <Link to="/customer/profile" className="dropdown-item">My Profile</Link>
                <Link   onClick={() => {
        dispatch(customerLogout(customerData?.login_token))
        }} className="dropdown-item text-danger">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
