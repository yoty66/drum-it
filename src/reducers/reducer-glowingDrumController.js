const initialState=[undefined, false, false, false, false, false, false, false,false]
export default (state=initialState,action)=>
{
    if(action.type=='ENABLE_DISABLE_GLOWING')

    {
        state[action.payload]=!state[action.payload];

        // if(state[action.payload])
        //     setTimeout(()=>{state[action.payload]=false; console.log(state);}, 1000);

    }
    console.log(state);
    return state;
};

