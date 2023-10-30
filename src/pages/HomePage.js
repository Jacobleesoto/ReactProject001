import { Container, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
   const navigate = useNavigate();

   const navigateToAddPage = () => {
      navigate('/add');
   };

   const navigateToLocatePage = () => {
      navigate('/locate');
   };

   return (
      <Container>
         <h1>Home Page</h1>
         <Button onClick={navigateToAddPage} color='primary' size='lg'>
            Add Pallets
         </Button>
         <Button onClick={navigateToLocatePage} color='primary' size='lg'>
            Locate Pallets
         </Button>
      </Container>
   );
};

export default HomePage;
