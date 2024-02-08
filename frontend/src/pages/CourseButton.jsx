
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function CourseButton() {
  return (
    <Stack spacing={2} direction="row">
      <Link to={"/academyregf"}>
        <Button variant="contained">Create Academy</Button>
        </Link>
      <Button variant="contained">Create Course</Button>
    </Stack>
  );
}
