import { useState } from 'react';
import { Table } from 'reactstrap';
import { INFODATABASE } from '../../app/shared/INFODATABASE';

/* this needs better styling
check boxes to select multiple pallets
option to remove pallets from list 
search bar */

const AddPageSelections = () => {
   const [contractor, setContractor] = useState('Contractor Name');
   const [job, setJob] = useState('Job Name');

   let handleContractorChange = (e) => {
      setContractor(e.target.value);
      setJob('Job Name');
   };

   let handleJobChange = (e) => {
      setJob(e.target.value);
   };

   const selectedContractor = INFODATABASE.find((c) => c.name === contractor);

   const shouldRenderTable =
      contractor !== 'Contractor Name' && job !== 'Job Name';

   return (
      <div>
         <select onChange={handleContractorChange} value={contractor}>
            <option value='Contractor Name'>Select Contractor</option>
            {INFODATABASE.map((contractor) => (
               <option key={contractor.name} value={contractor.name}>
                  {contractor.name}
               </option>
            ))}
         </select>

         {contractor !== 'Contractor Name' && (
            <select onChange={handleJobChange} value={job}>
               <option value='Job Name'>Select Job</option>
               {selectedContractor.jobs.map((job) => (
                  <option key={job.jobName} value={job.jobName}>
                     {job.jobName}
                  </option>
               ))}
            </select>
         )}

         {shouldRenderTable &&
            selectedContractor &&
            selectedContractor.jobs.length > 0 && (
               <Table>
                  <thead>
                     <tr>
                        <th>Pallet Number</th>
                        <th>Pallet Location</th>
                     </tr>
                  </thead>
                  <tbody>
                     {selectedContractor.jobs.map((jobInfo) => {
                        if (jobInfo.jobName === job && jobInfo.pallets) {
                           return jobInfo.pallets.map((pallet) => (
                              <tr key={pallet.palletNumber}>
                                 <td>{pallet.palletNumber}</td>
                                 <td>{pallet.palletLocation}</td>
                              </tr>
                           ));
                        }
                        return null;
                     })}
                  </tbody>
               </Table>
            )}
      </div>
   );
};

export default AddPageSelections;
