export  const clickEnable= (inst_id)=>
{
console.log('go there');
return{
        type : 'ENABLE_DISABLE_INSTRUMENT',
        payload : inst_id
    }

};