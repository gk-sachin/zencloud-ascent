import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import WestIcon from '@mui/icons-material/West';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';

import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function Album() {
  const [courseDetails, setCourseDetails] = useState(null);
  const courseId = 'your_course_id'; // Set your course ID here

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/api/courses/${courseId}`);
        setCourseDetails(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    }
    fetchData();
  }, [courseId]);

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to="/user-dashboard">
            <WestIcon sx={{ mr: 2 }} />
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            Courses
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {courseDetails && (
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image="https://source.unsplash.com/random?yoga"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {courseDetails.course.name}
                </Typography>
                <Typography>
                  {courseDetails.academy.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Course</Button>
              </CardActions>
            </Card>
          )}
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright '}
          <Link color="inherit" href="/">
            Zencloud-Ascent
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default Album;
