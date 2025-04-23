import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { customerLogout } from '../../features/actions/authentication';

const DashboardSidebar = ({ activeMenu, setActiveMenu, closeSidebar }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === 'true'
      ? import.meta.env.VITE_ASSETS
      : ''
  }`;

  const menuItems = [
    { label: 'Dashboard', icon: 'Dashboard.svg', url:"/customer/dashboard"},
    { label: 'My Products', icon: 'Dashboard.svg',url:"/customer/myProducts" },
    { label: 'Payment', icon: 'Dashboard.svg',url:"/customer/payment" },
  ];

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {customerData}= useSelector((state)=>state.authentication)


  return (
    <div className="d-flex flex-column align-items-center w-100 py-4">
      {/* Logo */}
      <div className="navbar-brand mb-5 text-decoration-none">
        <img
          src={`${assetRoute}/assets/img/dashboardIcons/logo.png`}
          className="mx-auto d-block"
          height={50}
          width={120}
          alt="Logo"
        />
      </div>

      {/* Menu */}
      <div className="d-flex flex-column w-100 ">
  {menuItems.map((item) => {
    const isActive = activeMenu === item.label;
    return (
      <div
        key={item.label}
        onClick={() => {
          setActiveMenu(item.label);
          item?.url && navigate(item?.url)
          if(closeSidebar)
          closeSidebar();
        }}
        className="d-flex align-items-center gap-3 px-4 py-3" // Add padding here
        style={{
          cursor: 'pointer',
          color: isActive ? '#0096FF' : '',
          borderRight: isActive ? '5px solid #0096FF' : 'none',
        }}
      >
        <img
          src={`${assetRoute}/assets/img/dashboardIcons/${item.icon}`}
          alt={item.label}
          style={{
            height: '18px',
            width: '20px',
            filter: isActive ? 'none' : 'grayscale(100%)',
          }}
        />
        <span className="fw-medium" >{item.label}</span>
      </div>
    );
  })}
    <div
        onClick={() => {
        dispatch(customerLogout(customerData?.login_token))
        }}
        className="d-flex align-items-center gap-3 px-4 py-3" // Add padding here
        style={{
          cursor: 'pointer',
        }}
      >
        <img
          src={`${assetRoute}/assets/img/dashboardIcons/Logout.svg`}
          alt="logout" 
          style={{
            height: '18px',
            width: '20px',            
          }}
        />
        <span className="fw-medium" >Log Out</span>
      </div>
</div>

    </div>
  );
};

export default DashboardSidebar;
