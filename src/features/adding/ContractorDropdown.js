import { useState, Button } from 'react';
import { CONTRACTORS } from '../../app/shared/CONTRACTORS';

const ContractorDropdown = () => {
   const [contractor, setContractor] = useState('Contractor Name');
   const [job, setJob] = useState('Job Name');

   let handleContractorChange = (e) => {
      setContractor(e.target.value);
      setJob('Job Name');
   };

   let handleJobChange = (e) => {
      setJob(e.target.value);
   };

   const selectedContractor = CONTRACTORS.find((c) => c.name === contractor);

   return (
      <div>
         <select onChange={handleContractorChange} value={contractor}>
            <option value='Contractor Name'>Select Contractor</option>
            {CONTRACTORS.map((contractor) => (
               <option key={contractor.name} value={contractor.name}>
                  {contractor.name}
               </option>
            ))}
         </select>

         {contractor !== 'Contractor Name' && (
            <select onChange={handleJobChange} value={job}>
               <option value='Job Name'>Select Job</option>
               {selectedContractor.jobs.map((job) => (
                  <option key={job.jobName} value={job.jobType}>
                     {job.jobName}
                  </option>
               ))}
            </select>
         )}
      </div>
   );
};

export default ContractorDropdown;
