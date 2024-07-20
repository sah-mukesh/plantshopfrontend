// import React, { useEffect, useState } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import { useParams, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { create_order, getAllProductsApi, getSingleProductApi } from "../apis/Api";

// const HomePage = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQueryUsers, setSearchQueryUsers] = useState("");
//   const { id } = useParams();
//   const [cart, setCart] = useState([]);
//   const [cartValue, setCartValue] = useState(1);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     getAllProductsApi().then((res) => {
//       setProducts(res.data.products);
//     });
//   }, []);

//   const handleSearchUsers = (e) => {
//     e.preventDefault();
//     const filteredUsers = products.filter((product) => {
//       const lowerCaseQuery = searchQueryUsers.toLowerCase();
//       return product.productName.toLowerCase().includes(lowerCaseQuery);
//     });
//     setProducts(filteredUsers);
//   };

//   const addToCart = (index) => {
//     const storedUserData = JSON.parse(localStorage.getItem("user"));
//     setUserData(storedUserData);

//     const productToAdd = products[index];

//     if (!cart.find((item) => item.id === productToAdd._id)) {
//       const orderData = {
//         userId: storedUserData._id,
//         productId: productToAdd._id,
//         orderId: index.toString(),
//         quantity: cartValue,
//       };

//       create_order(orderData)
//         .then((res) => {
//           if (res.data.success === false) {
//             toast.error(res.data.message);
//           } else {
//             setCart([
//               ...cart,
//               {
//                 id: productToAdd._id,
//                 name: productToAdd.productName,
//                 price: productToAdd.productPrice,
//                 quantity: cartValue,
//                 orderId: res.data.order.orderId,
//               },
//             ]);
//             alert("Item added to cart!");
//           }
//         })
//         .catch((err) => {
//           toast.error("Server Error");
//           console.log(err.message);
//         });
//     } else {
//       alert("Item is already in the cart!");
//     }
//   };

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px' }}>
//       <h1 style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>Gardening adds years to your life and life to your years!!</h1>

//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', position: 'relative' }}>
//         <img
//           src="https://cdn.lovesavingsgroup.com/content/7876a5dcf7a2c45f434e363d7bd360fb.png"
//           alt="Introduction"
//           style={{ height: '600px', width: '120%', borderRadius: '0px' }}
//         />
//         {/* <button
//           className="Secondary-button"
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '10%',
//             transform: 'translate(-50%, -50%)',
//             padding: '10px',
//             background: 'green',
//             color: '#fff',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Shop
        
//         </button> */}
//       </div>
//       <form className="d-flex me-2" onSubmit={handleSearchUsers}>
//         <input
//           className="form-control me-2"
//           type="text"
//           placeholder="Search Product..."
//           aria-label="Search"
//           value={searchQueryUsers}
//           onChange={(e) => setSearchQueryUsers(e.target.value)}
//           style={{
//             width: '300px',
//             padding: '10px',
//             marginRight: '10px',
//             borderRadius: '5px',
//             border: '1px solid #000000',
//             marginTop: '10px'
//           }}
//         />
//         <button className="btn btn-outline-black" type="submit" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #000000', marginTop: '10px' }}>Search</button>
//       </form>

//       <h2 style={{ textAlign: 'center', color: 'green', fontWeight: 'bold', marginTop: '20px' }}>New in Store</h2>

//       <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
//         {products.map((product, index) => (
//           <div key={product._id} style={{ margin: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px', textAlign: 'center' }}>
//             <img src={product.productImageUrl} alt={product.productName} style={{ width: '200px', height: '250px', objectFit: 'cover', borderRadius: '5px' }} />
//             <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productName}</h3>
//             <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productPrice}</h3>
//             <Link to={`/product/${product._id}`}>
//               <button
//                 style={{ padding: '8px', background: 'green', color: '#fff', borderRadius: '10px', cursor: 'pointer' }}>
//                 Buy Now
//               </button>
//             </Link>
//             <button onClick={() => addToCart(index)} style={{ padding: '8px', background: 'green', color: '#fff', borderRadius: '10px', cursor: 'pointer', marginLeft: '10px' }}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
       
//       <div style={{ marginTop: '50px', textAlign: 'left' }}>
//         <h2 style={{ color: 'green', fontWeight: 'bold' }}>Recommended</h2>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '8px' }}>
//           <img
//             src='https://m.media-amazon.com/images/I/61j1khSftbL.jpg'
//             alt='Recommended Product'
//             style={{ width: '30%', height: '500px', objectFit: 'cover', borderRadius: '8px' }}
//           />
//           <h3 style={{ fontSize: '18px', color: '#333', margin: '10px 0' }}>Buggy of Roses</h3>
//           <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>A bouquet of roses is a timeless symbol of love, beauty, and elegance. Each rose, with its velvety petals and captivating fragrance, conveys heartfelt emotions. Whether given as a gesture of romance, appreciation, or sympathy, a bouquet of roses speaks volumes, creating a lasting impression and adding a touch of grace to any occasion. </p>
//           <button style={{ padding: '10px', background: 'green', color: '#fff', borderRadius: '20px', cursor: 'pointer' }}>
//             Buy Now
//           </button>
//         </div>
//       </div>  

//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
//         <div style={{ width: '413px', height: '400px', textAlign: 'left', padding: '20px', backgroundColor: 'green', borderRadius: '0px' }}>
//           <h3 style={{ fontWeight: 'bold', color: 'black' }}>Our Services</h3>
//           <ul>
//             <li style={{ color: 'black' }}>Buy Plant glossary</li>
//             <li style={{ color: 'black' }}>Festival Offers</li>
//             <li style={{ color: 'black' }}>Contacts us any time</li>
//           </ul>
//         </div>
//         <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'green', borderRadius: '0px' }}>
//           <h3 style={{ fontWeight: 'bold', color: 'black' }}>Location</h3>
//           <ul>
//             <li style={{ color: 'black' }}>Visit Office</li>
//             <li style={{ color: 'black' }}>New Baneshwor, Kathmandu</li>
//             <li style={{ color: 'black' }}>Shrijananagr, Bhakatapur</li>
//           </ul>
//         </div>
//         <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'green', borderRadius: '0px' }}>
//           <h3 style={{ fontWeight: 'bold', color: 'black' }}>Contacts</h3>
//           <ul>
//             <li style={{ color: 'black' }}>Call Any Time</li>
//             <span style={{ color: 'black' }}>9811796917</span>
//             <li style={{ color: 'black' }}>Send Email</li>
//             <span style={{ color: 'black' }}>sahm83381@gmail.com</span>
//           </ul>
//         </div>
//         <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'green', borderRadius: '0px' }}>
//           <h3 style={{ fontWeight: 'bold', color: 'black' }}>Plant Shop</h3>
//           <ul>           
//             <p style={{ color: 'black' }}>Welcome to our Plant Shop, where every leaf tells a story and every bloom brings joy. Discover the beauty of nature and let your space thrive with life and color!</p>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { create_order, getAllProductsApi } from "../apis/Api";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQueryUsers, setSearchQueryUsers] = useState("");
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(1);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Updated from useHistory to useNavigate

  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        toast.error("Failed to fetch products");
        console.log(err.message);
      });
  }, []);

  const handleSearchUsers = (e) => {
    e.preventDefault();
    const filteredUsers = products.filter((product) => {
      const lowerCaseQuery = searchQueryUsers.toLowerCase();
      return product.productName.toLowerCase().includes(lowerCaseQuery);
    });
    setProducts(filteredUsers);
  };

  const addToCart = (index) => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    
    // Check if the user is logged in
    if (!storedUserData) {
      toast.warning("Please log in to add items to your cart.");
      navigate("/login"); // Updated from history.push to navigate
      return;
    }

    setUserData(storedUserData);

    const productToAdd = products[index];

    if (!cart.find((item) => item.id === productToAdd._id)) {
      const orderData = {
        userId: storedUserData._id,
        productId: productToAdd._id,
        orderId: index.toString(),
        quantity: cartValue,
      };

      create_order(orderData)
        .then((res) => {
          if (res.data.success === false) {
            toast.error(res.data.message);
          } else {
            setCart([
              ...cart,
              {
                id: productToAdd._id,
                name: productToAdd.productName,
                price: productToAdd.productPrice,
                quantity: cartValue,
                orderId: res.data.order.orderId,
              },
            ]);
            alert("Item added to cart!");
          }
        })
        .catch((err) => {
          toast.error("Server Error");
          console.log(err.message);
        });
    } else {
      alert("Item is already in the cart!");
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px' }}>
      <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>WELCOME TO GAME GALAXY</h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', position: 'relative' }}>
        <img
          src="https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-3d-glasses_23-2149529351.jpg?size=626&ext=jpg"
          alt="Introduction"
          style={{ height: '600px', width: '120%', borderRadius: '0px' }}
        />
        <div style={{ position: 'absolute', top: '10%', left: '10%', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.😎' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Discover the Latest in Game Galaxy</h2>
          <p style={{ fontSize: '1.2rem' }}>From cutting-edge keyboards to immersive headsets, find everything you need to elevate your gaming experience.</p>
        </div>
        <button
          className="secondary-button"
          style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translate()',
            padding: '15px',
            background: 'black',
            color: '#fff',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          Get Started Today <FiArrowRight />
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <form className="d-flex" onSubmit={handleSearchUsers} style={{ width: '100%', maxWidth: '600px' }}>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search Product..."
            aria-label="Search"
            value={searchQueryUsers}
            onChange={(e) => setSearchQueryUsers(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              marginRight: '10px',
              borderRadius: '5px',
              border: '2px solid #000000',
            }}
          />
          <button className="btn btn-outline-black" type="submit" style={{ padding: '10px', borderRadius: '5px', border: '2px solid #000000' }}>Search</button>
        </form>
      </div>

      <h2 style={{ textAlign: 'left', color: 'black', fontWeight: 'bold', marginTop: '20px' }}>New Arrivals</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
        {products.map((product, index) => (
          <div key={product._id} style={{ margin: '20px', padding: '15px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '10px', textAlign: 'center' }}>
            <img src={product.productImageUrl} alt={product.productName} style={{ width: '350px', height: '400px', objectFit: 'cover', borderRadius: '5px' }} />
            <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productName}</h3>
            <h3 style={{ marginTop: '10px', color: '#333' }}>{product.productPrice}</h3>
            <Link to={`/product/${product._id}`}>
              <button
                style={{ padding: '8px', background: 'black', color: '#fff', borderRadius: '10px', cursor: 'pointer' }}>
                Buy Now
              </button>
            </Link>
            <button onClick={() => addToCart(index)} style={{ padding: '8px', background: 'black', color: '#fff', borderRadius: '10px', cursor: 'pointer', marginLeft: '10px' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
       
      <div style={{ marginTop: '50px', textAlign: 'left' }}>
        <h2 style={{ color: 'black', fontWeight: 'bold' }}>Highly Recommended</h2>
        <div style={{ display: 'flex', alignItems: 'center', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '8px' }}>
          <img
            src='https://img.freepik.com/premium-photo/immerse-yourself-gaming-world-captivating-image-black-tour-pc-gamer-crisp-white-ba_983420-194932.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user'
            alt='Recommended Product'
            style={{ width: '30%', height: '500px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }}
          />
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '18px', color: '#333', margin: '10px 0' }}>Ryzen ZproPC</h3>
            <p style={{ fontSize: '16px', color: '#333', margin: '5px 0' }}>
            A high-end Windows PC that is suited for gaming. Although available ready built, gaming PCs are often custom made for the serious enthusiast. 
            They have as much as 32GB of RAM and the fastest CPU and GPU chips that are generally no more than one generation behind. Typically using a tower case to accommodate multiple drives and state-of-the-art graphics cards that can cost five times as much as an entire non-gaming PC, such machines often use elaborate cooling mechanisms, especially if the CPU is overclocked.</p>
            <button style={{ padding: '10px', background: 'black', color: '#fff', borderRadius: '20px', cursor: 'pointer' }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>  

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
        <div style={{ width: '413px', height: '400px', textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
          <h3 style={{ fontWeight: 'bold', color: 'white' }}>Our Services</h3>
          <ul>
            <li style={{ color: 'white' }}>Buy Gaming Accessories</li>
            <li style={{ color: 'white' }}>Festival Offers</li>
            <li style={{ color: 'white' }}>Contacts us any time</li>
          </ul>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
          <h3 style={{ fontWeight: 'bold', color: 'white' }}>Location</h3>
          <ul>
            <li style={{ color: 'white' }}>Visit Office</li>
            <li style={{ color: 'white' }}>New Baneshwor, Kathmandu</li>
            <li style={{ color: 'white' }}>Suryabinayak, Bhakatapur</li>
          </ul>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
          <h3 style={{ fontWeight: 'bold', color: 'white' }}>Contacts</h3>
          <ul>
            <li style={{ color: 'white' }}>Call Any Time</li>
            <span style={{ color: 'white' }}>9811796917</span>
            <li style={{ color: 'white' }}>Send Email</li>
            <span style={{ color: 'white' }}>sahm83381@gmail.com</span>
          </ul>
        </div>
        <div style={{ textAlign: 'left', padding: '20px', backgroundColor: 'black', borderRadius: '0px' }}>
          <h3 style={{ fontWeight: 'bold', color: 'white' }}>GAME GALAXY</h3>
          <ul>           
            <p style={{ color: 'white' }}>Game Galaxy welcomes gamers to the ultimate destination for all gaming needs! It is your ultimate destination for top-notch gaming accessories and gear.</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
