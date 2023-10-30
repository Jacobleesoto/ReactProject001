import { Container, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

/*
add a back icon in front of the button 
*/

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
