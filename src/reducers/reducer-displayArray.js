const initialState=[undefined, true, true, true, true, true, true, true,true]
export default (state=initialState,action)=>
{
    if(action.type=='ENABLE_DISABLE_INSTRUMENT')
    {
        state[action.payload]=!state[action.payload];

    }
    return state;
};


