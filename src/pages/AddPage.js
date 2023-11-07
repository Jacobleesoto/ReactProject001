import { Container } from 'reactstrap';
import BackHomeButton from '../components/BackHomeButton';
import AddPageSelections from '../features/adding/AddPageSelections';

const AddPage = () => {
   return (
      <Container>
         <BackHomeButton />
         <h1>Add Pallet:</h1>
         <AddPageSelections />
      </Container>
   );
};

export default AddPage;
