// import React from 'react';

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     image: 'https://img.freepik.com/premium-photo/adjustable-computer-gaming-chair-with-footrest-isolated-white-background_1126594-2155.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
//     price: '$100',
//     rating: '4.5',
//     discount: '10%',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     image: 'https://img.freepik.com/premium-photo/gaming-chair-design-gaming-concept_948265-304375.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
//     price: '$200',
//     rating: '4.0',
//     discount: '15%',
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     image: 'https://img.freepik.com/premium-photo/gaming-chair-design-gaming-concept_948265-306088.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
//     price: '$200',
//     rating: '4.0',
//     discount: '15%',
//   },
//   {
//     id: 4,
//     name: 'Product 4',
//     image: 'https://img.freepik.com/premium-photo/gaming-chair-design-gaming-concept_948265-306088.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
//     price: '$200',
//     rating: '4.0',
//     discount: '15%',
//   },
//   {
//     id: 5,
//     name: 'Product 5',
//     image: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072204.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
//     price: '$200',
//     rating: '4.0',
//     discount: '15%',
//   },
//   {
//     id: 6,
//     name: 'Product 7',
//     image: 'https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072238.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
//     price: '$200',
//     rating: '4.0',
//     discount: '15%',
//   },
//   {
//     id: 7,
//     name: 'Product 7',
//     image: 'https://img.freepik.com/premium-photo/professional-wireless-audio-headphones-red-background_170896-302.jpg?ga=GA1.1.26775719.1718502937&semt=ais_user',
//     price: '$200',
//     rating: '4.0',
//     discount: '15%',
//   },
// ];

// const ProductPage = () => {
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '1000px', margin: 'auto' }}>
//       <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Hot Deals</h1>
      
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//         {products.map(product => (
//           <div key={product.id} style={{ flex: '1 0 21%', boxSizing: 'border-box', margin: '10px', textAlign: 'center', border: '1x solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
//             <img
//               src={product.image}
//               alt={product.name}
//               style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
//             />
//             <h2 style={{ fontSize: '18px', color: '#333', margin: '10px 0' }}>{product.name}</h2>
//             <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>{product.price}</p>
//             <p style={{ fontSize: '14px', color: '#ffa500', margin: '5px 0' }}>Rating: {product.rating}</p>
//             <p style={{ fontSize: '14px', color: '#ff5733', margin: '5px 0' }}>Discount: {product.discount}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import React from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAqe0DR5d_niOH1rol6km63SpfLmCoaqRyQ&s',
    price: '$300',
    rating: '4.5',
    discount: '10%',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://36vine.com/wp-content/uploads/2023/12/Monstera-deliciosa.webp',
    price: '$100',
    rating: '4.0',
    discount: '15%',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://www.bhg.com/thmb/PG21ob_TTVAWsJD2r4cFZD4qK1w=/1244x0/filters:no_upscale():strip_icc()/variegated-spider-plant-efd23956-ef09e0cfc0074056a74b3d1392f5d175.jpg',
    price: '$250',
    rating: '4.0',
    discount: '15%',
  },  
  {
    id: 4,
    name: 'Product 4',
    image: 'https://www.mydomaine.com/thmb/N3StDx3PyGbF0Pwafv-P9-qiNZU=/900x0/filters:no_upscale():strip_icc()/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.jpg',
    price: '$200',
    rating: '4.0',
    discount: '15%',
  },
  {
    id: 6,
    name: 'Product 5',
    image: 'https://gardenerspath.com/wp-content/uploads/2022/01/How-to-Grow-Parlor-Palm-Cover.jpg',
    price: '$100',
    rating: '4.0',
    discount: '15%',
  },
  {
    id: 7,
    name: 'Product 6',
    image: 'https://m.media-amazon.com/images/I/61j1khSftbL.jpg',
    price: '$100',
    rating: '4.0',
    discount: '15%',
  },
  {
    id: 7,
    name: 'Product 7',
    image: 'https://i0.wp.com/sugarcreekgardens.com/wp-content/uploads/2022/12/Hosta-Miss-American.jpg?fit=1000%2C1000&ssl=1',
    price: '$400',
    rating: '4.0',
    discount: '15%',
  },
  {
    id: 7,
    name: 'Product 8',
    image: 'https://www.wholesalenurseryco.com/cdn/shop/files/Shutterstock_2371907475_1_1.jpg?v=1709934775&width=2000',
    price: '$300',
    rating: '4.0',
    discount: '15%',
  },
];

const ProductPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'left', color: 'green', fontWeight: 'bold' }}>Hot Deals</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map(product => (
          <div key={product.id} style={{ flex: '1 0 27%', boxSizing: 'border-box', margin: '10px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h2 style={{ fontSize: '18px', color: '#333', margin: '10px 0' }}>{product.name}</h2>
            <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>{product.price}</p>
            <p style={{ fontSize: '14px', color: '#ffa500', margin: '5px 0' }}>Rating: {product.rating}</p>
            <p style={{ fontSize: '14px', color: '#ff5733', margin: '5px 0' }}>Discount: {product.discount}</p>
          </div>
        ))}
      </div>      
    </div>
  );
};

export default ProductPage;
