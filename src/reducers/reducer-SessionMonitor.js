
export default (state=[],action)=>
{
    if(action.type=='MONITOR_CLICK')
    {
        state=state.concat(action.payload);
        console.log(state)
    }

    if (action.type=='END_SESSION') {
        state=[]
        console.log('End session!   now clear', state)

    }

    return state;
};


