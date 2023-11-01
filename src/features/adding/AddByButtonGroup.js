/* import {
   Button,
   ButtonGroup,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
} from 'reactstrap';

const AddByButtonGroup = () => {
   return (
      <ButtonGroup>
         <ButtonGroup>
            <UncontrolledDropdown>
               <DropdownToggle caret>Contractor Name</DropdownToggle>
               <DropdownMenu>
                  <DropdownItem></DropdownItem>
               </DropdownMenu>
            </UncontrolledDropdown>
         </ButtonGroup>
         <Button>New Job</Button>
      </ButtonGroup>
   );
};

export default AddByButtonGroup; */

import { useState } from 'react';
import { CONTRACTORS } from '../../app/shared/CONTRACTORS';

const AddByButtonGroup = () => {
   const [contractor, setContractor] = useState('Contractor Name');

   let handleContractorChange = (e) => {
      setContractor(e.target.value);
   };

   return (
      <>
         {contractor}
         <br />
         <select onChange={handleContractorChange}>
            <option value='Contractor Name'>Select Contractor</option>
            {CONTRACTORS.map((contractor) => (
               <option value={contractor.name}>{contractor.name}</option>
            ))}
         </select>
      </>
   );
};

export default AddByButtonGroup;
