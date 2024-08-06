import React, { useState } from 'react';

const EditProfile = () => {
  // State variables for storing user profile data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [saveConfirmation, setSaveConfirmation] = useState(''); // State for showing save confirmation message

  // Function to handle saving the profile
  const handleSaveProfile = () => {
    // Here you can implement the logic to save the profile data
    console.log('Profile saved:', { name, email, location, age, bio });
    setSaveConfirmation('Changes saved successfully!'); // Set confirmation message
    setTimeout(() => setSaveConfirmation(''), 5000); // Clear message after 5 seconds
  };

  return (
    <div style={{ width: '500px', margin: '0 auto', padding: '30px', border: '5px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginBottom: '20px', textAlign:'center', color:'black', fontWeight: 'bold' }}>Edit Profile</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
      </div>
      {saveConfirmation && <div style={{ color: 'green', marginBottom: '10px', textAlign: 'center' }}>{saveConfirmation}</div>}
      <button onClick={handleSaveProfile} style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: 'grey', color: '#fff', cursor: 'pointer', width: '100%' }}>Save Changes</button>
    </div>
  );
};

export default EditProfile;

// import React, { useState } from 'react';

// const EditProfile = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');
//   const [age, setAge] = useState('');
//   const [bio, setBio] = useState('');
//   const [saveConfirmation, setSaveConfirmation] = useState('');
//   const [isLoading, setIsLoading] = useState(false);  // State to manage loading status

//   const handleSaveProfile = async () => {
//     setIsLoading(true);  // Set loading state to true
//     const profileData = { name, email, location, age, bio };

//     try {
//       const response = await fetch('https://your-api-domain.com/profile/update', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(profileData)
//       });

//       if (!response.ok) {
//         throw new Error('Failed to save profile!');
//       }

//       const result = await response.json(); // Assuming the server returns JSON
//       setSaveConfirmation('Changes saved successfully!');
//       console.log('Server response:', result);
//     } catch (error) {
//       setSaveConfirmation('Error saving changes.');
//       console.error('Saving error:', error);
//     } finally {
//       setIsLoading(false);  // Reset loading state regardless of outcome
//       setTimeout(() => setSaveConfirmation(''), 5000); // Clear message after 5 seconds
//     }
//   };

//   return (
//     <div style={{ width: '500px', margin: '0 auto', padding: '30px', border: '5px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
//       <h2 style={{ marginBottom: '20px', textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Edit Profile</h2>
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Location:</label>
//         <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Age:</label>
//         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
//       </div>
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ fontWeight: 'bold', marginRight: '10px' }}>Bio:</label>
//         <textarea value={bio} onChange={(e) => setBio(e.target.value)} style={{ padding: '8px', borderRadius: '3px', border: '1px solid #ccc', width: '100%' }} />
//       </div>
//       {isLoading && <div>Loading...</div>}
//       {saveConfirmation && <div style={{ color: 'green', marginBottom: '10px', textAlign: 'center' }}>{saveConfirmation}</div>}
//       <button onClick={handleSaveProfile} style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: 'grey', color: '#fff', cursor: 'pointer', width: '100%' }}>Save Changes</button>
//     </div>
//   );
// };

// export default EditProfile;
