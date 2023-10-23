
const getLocalData = ()=>{
    const datas = localStorage.getItem("mycart");
    if(datas){
        return JSON.parse(datas)
    }
    return [];
}

const addLocalData = (id)=>{
    const dataList = getLocalData();
    const findData = dataList.find(item=>{
        return item == id;
    })
    if(!findData){
        dataList.push(id);
    }
    localStorage.setItem("mycart", JSON.stringify(dataList));
}

export {getLocalData, addLocalData}