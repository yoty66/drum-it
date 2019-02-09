





export const indicateInTime=
    function(SessionArray)
    {
        console.log('got here');
     SessionArray.forEach(({id,timeStamp})=>{ setTimeout(()=>{Indicate(id)},timeStamp)});
        const Indicate=(drumId)=>{
            this.props.IndicateDrum(drumId);
            setTimeout(()=>this.props.DisIndicateDrum(drumId),1000);

        }
};




