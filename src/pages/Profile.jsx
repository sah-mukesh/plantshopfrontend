import React from 'react';

const Profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', border: '5px solid #ddd', borderRadius: '10px', maxWidth: '600px' }}>
        <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>User Profile</h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img
            src="https://www.hindustantimes.com/ht-img/img/2023/10/03/550x309/Instagram_Viral_X_Twitter_Hairstyle_MS_Dhoni_1696334370357_1696334393648.png" // Placeholder image URL
            alt="Profile"
            style={{ height: '200px', width: '200px', borderRadius: '50%' }}
          />
          <a
            href="/editprofile"
            style={{
              marginTop: '20px',
            background: 'grey',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            display: 'inline-block',
            textDecoration: 'none', // Remove underline from link
      }}
    >
      Edit
    </a>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2>Mukesh Shah</h2>
          <p>Email: sahm83381@gmail.com</p>
          <p>Location: Balkumari, Kathmadu</p>
          <p>Age: 24</p>
          <p>Bio: Hlo, It's me Mukesh kumar sah and I am from Siraha District.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
