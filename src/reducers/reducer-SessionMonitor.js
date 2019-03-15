
export default (state=[],action)=>
{
    if(action.type=='MONITOR_CLICK')
    {
        state=state.concat(action.payload);

    }

    if (action.type=='END_SESSION') {

        state=[]


    }

    return state;
};


