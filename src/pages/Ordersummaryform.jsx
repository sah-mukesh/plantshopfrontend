
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { getSingleProductApi } from '../apis/Api';

// const OrderSummaryForm = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [orderSuccess, setOrderSuccess] = useState(false); // State to manage order success message visibility

//   useEffect(() => {
//     getSingleProductApi(id)
//       .then((res) => {
//         setProduct(res.data.product);
//       })
//       .catch((err) => {
//         console.error("Error fetching product:", err);
//       });
//   }, [id]);

//   const handleQuantityChange = (delta) => {
//     setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
//   };

//   const handleOrderClick = () => {
//     // Implement your order processing logic here
//     setOrderSuccess(true); // Display the success message
//     setTimeout(() => setOrderSuccess(false), 5000); // Hide the message after 5 seconds
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '1000px', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
//       <div style={{ flex: '1', marginRight: '20px' }}>
//         <h1 style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Order Summary Form</h1>
        
//         <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
//           <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Product Summary</h2>
//           <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
//             <img
//               src={product.productImageUrl}
//               alt={product.productName}
//               style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }}
//             />
//             <div style={{ flex: '1' }}>
//               <h3 style={{ fontSize: '18px', color: '#333', margin: '0' }}>{product.productName}</h3>
//               <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Rs {product.productPrice}</p>
//             </div>
//             <div>
//               <button onClick={() => handleQuantityChange(1)} style={{ fontSize: '18px', padding: '5px', borderRadius: '5px', margin: '5px' }}>+</button>
//               <button onClick={() => handleQuantityChange(-1)} style={{ fontSize: '18px', padding: '5px', borderRadius: '5px', margin: '5px' }}>-</button>
//             </div>
//           </div>
//           <hr />
//           <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Product Total <span style={{ float: 'right' }}>Rs {product.productPrice * quantity}</span></p>
//           <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Delivery Fee <span style={{ float: 'right' }}>Free</span></p>
//           <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold', margin: '5px 0' }}>Total <span style={{ float: 'right' }}>Rs {product.productPrice * quantity}</span></p>
//         </div>
//         {orderSuccess && <div style={{ color: 'green', marginTop: '20px', fontWeight: 'bold' }}>Order Successfully Placed!</div>}
//       </div>

//       <div style={{ flex: '1', marginLeft: '20px' }}>
//         <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Full Name</h2>
//         <input type="text" style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />

//         <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Email</h2>
//         <input type="email" style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />

//         <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Contact Number</h2>
//         <input type="text" style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />

//         <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Address</h2>
//         <input type="text" style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />

//         <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Payment Method</h2>
//         <div style={{ margin: '10px 0' }}>
//           <button style={{ width: '100%', padding: '15px', margin: '5px 0', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9' }}>Cash on Delivery</button>
//           <Link to="/payment">
//             <button style={{ width: '100%', padding: '15px', margin: '5px 0', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9' }}>Pay Online</button>
//           </Link>
//         </div>
//         <button onClick={handleOrderClick} style={{ width: '100%', padding: '15px', margin: '10px 0', borderRadius: '8px', border: 'none', background: '#000', color: '#fff', fontWeight: 'bold' }}>Order</button>
//       </div>
//     </div>
//   );
// };

// export default OrderSummaryForm;


import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleProductApi } from '../apis/Api';

const OrderSummaryForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false); // State to manage order success message visibility

  useEffect(() => {
    getSingleProductApi(id)
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  const handleQuantityChange = (delta) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
  };

  const handleOrderClick = () => {
    setOrderSuccess(true); // Display the success message
    setTimeout(() => setOrderSuccess(false), 5000); // Hide the message after 5 seconds
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1000px', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: '1', marginRight: '15px' }}>
        <h1 style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Order Summary Form</h1>
        
        <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
          <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Product Summary</h2>
          <div style={{ display: 'flex', alignItems: 'center', margin: '15px 0' }}>
            <img
              src={product.productImageUrl}
              alt={product.productName}
              style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '8px', marginRight: '15px' }}
            />
            <div style={{ flex: '1' }}>
              <h3 style={{ fontSize: '16px', color: '#333', margin: '0' }}>{product.productName}</h3>
              <p style={{ fontSize: '14px', color: '#777', margin: '5px 0' }}>Rs {product.productPrice}</p>
            </div>
            <div>
              <button onClick={() => handleQuantityChange(1)} style={{ fontSize: '16px', padding: '4px', borderRadius: '4px', margin: '5px' }}>+</button>
              <button onClick={() => handleQuantityChange(-1)} style={{ fontSize: '16px', padding: '4px', borderRadius: '4px', margin: '5px' }}>-</button>
            </div>
          </div>
          <hr />
          <p style={{ fontSize: '14px', color: '#777', margin: '5px 0' }}>Product Total <span style={{ float: 'right' }}>Rs {product.productPrice * quantity}</span></p>
          <p style={{ fontSize: '14px', color: '#777', margin: '5px 0' }}>Delivery Fee <span style={{ float: 'right' }}>Free</span></p>
          <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold', margin: '5px 0' }}>Total <span style={{ float: 'right' }}>Rs {product.productPrice * quantity}</span></p>
        </div>
        {orderSuccess && <div style={{ color: 'green', marginTop: '15px', fontWeight: 'bold' }}>Order Successfully Placed!</div>}
      </div>

      <div style={{ flex: '1', marginLeft: '15px' }}>
        <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>Full Name</h2>
        <input type="text" style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px' }} />

        <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>Email</h2>
        <input type="email" style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px' }} />

        <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>Contact Number</h2>
        <input type="text" style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px' }} />

        <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>Address</h2>
        <input type="text" style={{ width: '100%', padding: '8px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px' }} />

        <h2 style={{ textAlign: 'left', color: '#333', fontWeight: 'bold', fontSize: '16px' }}>Payment Method</h2>
        <div style={{ margin: '8px 0' }}>
          <button style={{ width: '100%', padding: '12px', margin: '5px 0', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9', fontSize: '14px' }}>Cash on Delivery</button>
          <Link to="/payment">
            <button style={{ width: '100%', padding: '12px', margin: '5px 0', borderRadius: '8px', border: '1px solid #ddd', background: '#f9f9f9', fontSize: '14px' }}>Pay Online</button>
          </Link>
        </div>
        {/* <button onClick={handleOrderClick} style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', border: 'none', background: '#000', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>Order</button>
      </div>
    </div>
  );
};

export default OrderSummaryForm; */}
