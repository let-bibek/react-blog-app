import {useEffect} from 'react';
const useTitleCount=(count)=>{
    useEffect(() => {
        if(count>0){
            document.title=`Notification(${count})`;
        }
        else{
            document.title=`Facebook`;
        }
       
    }, [count])
}
export default useTitleCount;