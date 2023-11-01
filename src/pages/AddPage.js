import { Container } from 'reactstrap';
import BackHomeButton from '../components/BackHomeButton';
import AddByButtonGroup from '../features/adding/AddByButtonGroup';

const AddPage = () => {
   return (
      <Container>
         <BackHomeButton />
         <h1>Add by:</h1>
         <AddByButtonGroup />
      </Container>
   );
};

export default AddPage;
