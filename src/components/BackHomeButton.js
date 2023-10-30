import { Container, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const BackHomeButton = () => {
   const navigate = useNavigate();
   const navigateHome = () => {
      navigate('/');
   };

   return (
      <Container>
         <Button onClick={navigateHome} color='primary' size='lg'>
            Go Back To Home
         </Button>
      </Container>
   );
};

export default BackHomeButton;
