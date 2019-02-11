const initialState=[undefined, false, false, false, false, false, false, false,false];
export default (state=initialState,action)=>
{
    if(action.type==='ENABLE_GLOWING')

    {
        state[action.payload]=true;

        // if(state[action.payload])
        //     setTimeout(()=>{state[action.payload]=false; console.log(state);}, 1000);

    }
    if(action.type==='DISABLE_GLOWING')
    {
        state[action.payload]=false;
    }
    console.log(state);
    return state;
};

