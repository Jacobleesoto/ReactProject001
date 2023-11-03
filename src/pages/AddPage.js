import { Container } from 'reactstrap';
import BackHomeButton from '../components/BackHomeButton';
import ContractorDropdown from '../features/adding/ContractorDropdown';

const AddPage = () => {
   return (
      <Container>
         <BackHomeButton />
         <h1>Add Pallet:</h1>
         <ContractorDropdown />
      </Container>
   );
};

export default AddPage;
