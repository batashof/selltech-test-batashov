import React from 'react';
import './App.css';
import {CustomSelect} from "./components/CustomSelect";
import {useQuery} from "@apollo/client";
import {GET_POSITIONS, GET_RELATIONS} from "./Queries";
import {Box, CircularProgress} from "@mui/material";

function App() {
    const { loading: relationsLoading, error: relationsError, data: relationsData = [] } = useQuery(GET_RELATIONS);
    const { loading: positionsLoading, error: positionsError, data: positionsData = [] } = useQuery(GET_POSITIONS);
    if (relationsLoading || positionsLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }

  return (
    <div className="App">
      <CustomSelect options={relationsData.applicantIndividualCompanyRelations.data}/>
      <CustomSelect options={positionsData.applicantIndividualCompanyPositions.data} isTextArea={true}/>
    </div>
  );
}

export default App;
