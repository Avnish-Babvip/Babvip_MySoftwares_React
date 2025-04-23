import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardData } from '../../features/actions/dashboard';

const Dashboard = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === 'true'
      ? import.meta.env.VITE_ASSETS
      : ''
  }`;

  const dispatch=useDispatch()

  const {customerData}= useSelector((state)=>state.authentication)
  const {customer_software}= useSelector((state)=>state.dashboard.dashboardData)

  useEffect(()=>{
    dispatch(getDashboardData(customerData?.login_token))
  },[])

  console.log(customer_software)
  

  return (
    <>
   <div className="container py-4">
  <h5 className="fw-medium mb-4">Dashboard</h5>

  <div className="row g-4">
    {/* Total Orders */}
    {/* <div className="col-md-4">
      <div className="card shadow-sm rounded-4 border-0 p-3 d-flex flex-row justify-content-between align-items-center">
        <div>
          <p className="text-muted mb-1">Total Orders</p>
          <h5 className="fw-medium mb-2">2,400</h5>
          <p className="mb-0 text-success fw-semibold" style={{ fontSize: '14px' }}>
            1% ▲ <span className="text-muted">+24 this month</span>
          </p>
        </div>
        <div className=" bg-opacity-25 rounded-3 p-3" style={{"background-color": "rgba(255, 106, 26, 0.1)"}}>
          <img src={`${assetRoute}/assets/img/dashboardIcons/cart.svg`} alt="Cart" style={{ width: '24px' }} />
        </div>
      </div>
    </div> */}

    {/* Total Balance */}
    {/* <div className="col-md-4">
      <div className="card shadow-sm rounded-4 border-0 p-3 d-flex flex-row justify-content-between align-items-center">
        <div>
          <p className="text-muted mb-1">Total Balance</p>
          <h5 className="fw-medium mb-2">$100.00</h5>
          <p className="mb-0 text-success fw-semibold" style={{ fontSize: '14px' }}>
            10% ▲ <span className="text-muted">+ $10 today</span>
          </p>
        </div>
        <div className=" rounded-3 p-3" style={{"background-color": "rgba(140, 58, 255, 0.1)"}}>
          <img src={`${assetRoute}/assets/img/dashboardIcons/payment.svg`} alt="Wallet" style={{width: '28px' }} />
        </div>
      </div>
    </div> */}

    {/* Reward Points */}
    {/* <div className="col-md-4">
      <div className="card shadow-sm rounded-4 border-0 p-3 d-flex flex-row justify-content-between align-items-center">
        <div>
          <p className="text-muted mb-1">Reward Points</p>
          <h5 className="fw-medium mb-2">1,200</h5>
          <p className="mb-0 text-success fw-semibold" style={{ fontSize: '14px' }}>
            10% ▲ <span className="text-muted">+120 today</span>
          </p>
        </div>
        <div className=" rounded-3 p-3" style={{"background-color": "rgba(34, 201, 164, 0.1)"}}>
        <img src={`${assetRoute}/assets/img/dashboardIcons/cart.svg`} alt="Cart" style={{ width: '24px' }} />
        </div>
      </div>
    </div> */}

   {Array.isArray(customer_software) && customer_software.map((item, idx) => (
  <div className="col-md-4" key={idx}>
    <div className="card shadow-sm rounded-4 border-0 p-3 d-flex flex-row justify-content-between align-items-center">
      <div className="w-100">
        <p className="text-muted mb-1">{item?.software?.software_name}</p>

        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fw-medium mb-2">{item?.plan?.plan_price}</h5>
          <span className={`${item?.is_paid ? "text-success" : "text-danger"} fw-semibold`}>
            {item?.is_paid ? "Paid" : "Not Paid"}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 text-success fw-semibold" style={{ fontSize: '14px' }}>
            {item?.plan?.plan_name}
          </p>
          <span className="text-capitalize" style={{ fontSize: '14px' }}>
            {item?.status}
          </span>
        </div>
      </div>
    </div>
  </div>
))}

  </div>
</div>

    </>
  )
}

export default Dashboard