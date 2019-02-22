//The actions creator file for react redux

export  const clickEnable= (inst_id)=>
{

return{
        type : 'ENABLE_DISABLE_INSTRUMENT',
        payload : inst_id
    }

};

export const monitorClick=(inst_id,timeStamp)=>
{
    return{
        type : 'MONITOR_CLICK',
        payload : {"id":inst_id,"timeStamp":timeStamp}
    }
};

export const EndSession=()=>
{

    return{
        type : 'END_SESSION',
    }
};

export const IndicateDrum= (inst_id)=>
{
    console.log('go there');
    return{
        type : 'ENABLE_GLOWING',
        payload:inst_id
    }
};

export const DisIndicateDrum= (inst_id)=>
{
    console.log('go there');
    return{
        type : 'DISABLE_GLOWING',
        payload:inst_id
    }
};


