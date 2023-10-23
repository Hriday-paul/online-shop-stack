import PropTypes from 'prop-types'
import { useState } from 'react';
import { createContext } from 'react'
import { addLocalData, getLocalData } from '../../LocalStore';

export const CardContext = createContext(null);
function HandleContext({children}) {
    const [localUpdate, setLocalUpdate] = useState("first");
   
    const AddIdLocal = async(id)=>{
        await addLocalData(id); 
    }
    
    const dataList = {
        localUpdate,
        AddIdLocal,
    }
  return (
    <CardContext.Provider value={dataList}>
        {children}
    </CardContext.Provider>
  )
}

HandleContext.propTypes = {
    children : PropTypes.object
}
export default HandleContext

// const [LocalIds, setLocalIds] = useState(getLocalData());
    // console.log(LocalIds)
    // await addLocalData(id);
    //     setLocalIds([...LocalIds, id]);

