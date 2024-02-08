import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AcademyRegistrationForm() {
  const [academyData, setAcademyData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcademyData({ ...academyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', academyData);
    // Add your form submission logic here
  };

  return (
    <form style={{ width: '100%', maxWidth: 400, margin: '0 auto' }} onSubmit={handleSubmit}>
      <TextField
        fullWidth
        variant="outlined"
        label="Academy Name"
        name="name"
        value={academyData.name}
        onChange={handleChange}
        style={{ marginBottom: 16 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Email"
        type="email"
        name="email"
        value={academyData.email}
        onChange={handleChange}
        style={{ marginBottom: 16 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Phone Number"
        name="phoneNumber"
        value={academyData.phoneNumber}
        onChange={handleChange}
        style={{ marginBottom: 16 }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        style={{ marginTop: 16 }}
      >
        Register Academy
      </Button>
    </form>
  );
}
