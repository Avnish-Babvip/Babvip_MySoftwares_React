import React from 'react';
import { Container} from 'react-bootstrap';
import { HiOutlineMail } from "react-icons/hi";
import { useSelector } from 'react-redux';

const Profile = () => {

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
  
    const diffMs = now.getTime() - past.getTime();
  
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  };
  
  console.log(getTimeAgo("2025-04-16T08:49:40.415978Z"));
  
  const {customer} = useSelector((state)=>state.authentication.customerData)

  return (
    <Container className="py-4">
      <div className="bg-white shadow-sm rounded-3">
        {/* Profile Header */}
        <div className="text-center bg-light py-4 border-bottom mx-3">
          <div
            className="rounded-circle bg-secondary mx-auto mb-2"
            style={{ width: '80px', height: '80px' }}
          ></div>
          <h5 className="mb-0">{customer?.first_name} {customer?.last_name}</h5>
          <span style={{backgroundColor:'rgba(34, 201, 164, 0.1)',color:'#18BBA2'}} className='rounded-3 px-2 fw-semibold fs-sm'>Active</span>
        </div>

        {/* Info Section */}
        <div className='px-3 py-3'>
          <div className="mb-3 d-flex gap-2 align-items-center">
            <div className='bg-secondary rounded-circle px-1'><HiOutlineMail size={25}/></div>
            <div><span className='fs-sm fw-semibold'>Customer ID</span>
            <div className='text-black fs-md fw-medium'>{customer?.customer_id}</div></div>
          </div>
          <div className="mb-3 align-items-center d-flex gap-2">
             <div className='bg-secondary rounded-circle px-1'><HiOutlineMail size={25}/></div>
            <div><span className='fs-sm fw-semibold'>E-mail</span>
            <div className='text-black fs-md fw-medium'>{customer?.email}</div></div>
          </div>
          <div className="mb-3 align-items-center d-flex gap-2">
             <div className='bg-secondary rounded-circle px-1'><HiOutlineMail size={25}/></div>
            <div><span className='fs-sm fw-semibold'>Address</span>
            <div className='text-black fs-md fw-medium'>{customer?.address}</div></div>
          </div>
          <div className="mb-3 align-items-center d-flex gap-2">
             <div className='bg-secondary rounded-circle px-1'><HiOutlineMail size={25}/></div>
            <div><span className='fs-sm fw-semibold'>Phone Number</span>
            <div className='text-black fs-md fw-medium'>{customer?.phone_number}</div></div>
          </div>
          <div className="mb-3 align-items-center d-flex gap-2">
             <div className='bg-secondary rounded-circle px-1'><HiOutlineMail size={25}/></div>
            <div><span className='fs-sm fw-semibold'>Last Transaction</span>
            <div className='text-black fs-md fw-medium'>12 December 2022</div></div>
          </div>
          <div className="mb-3 align-items-center d-flex gap-2">
             <div className='bg-secondary rounded-circle px-1'><HiOutlineMail size={25}/></div>
            <div><span className='fs-sm fw-semibold'>Last Login</span>
            <div className='text-black fs-md fw-medium'>{getTimeAgo(customer?.last_login_at)}</div></div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Profile;
