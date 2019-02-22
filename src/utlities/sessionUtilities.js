

export const SessionControler=
    function(command,SessionArray)
    {

        //
        const indicateInTime=
            (SessionArray)=>
            {
                console.log('got here');
                SessionArray.forEach(({id,timeStamp})=>{ setTimeout(()=>{Indicate(id)},timeStamp)});
                const Indicate=(drumId)=>{
                    this.props.IndicateDrum(drumId);
                    setTimeout(()=>this.props.DisIndicateDrum(drumId),1000);

                }
            };


        //
        //
        const StartSession=(SessionArray)=> {
            const StartMonitoring=()=> {
                localStorage.setItem('SessionStartTime', (new Date()).getTime());
                console.log(localStorage.getItem('SessionStartTime'));
                localStorage.setItem('OnSession', 'True');
            };
            StartMonitoring();

            indicateInTime(SessionArray);

            alert('start session');
        };
        //


        //

        const EndSession =()=>{
            const StopMonitoring=()=> {
                localStorage.removeItem('SessionStartTime');
                localStorage.removeItem('OnSession');
                const sessionRecords = this.props.monitor;
                console.log('session logs:', sessionRecords);
                this.props.EndSession();
                return sessionRecords;
            };
           const sessionRecords=StopMonitoring();
           //need to write:
           //const diffArray=analyazeResult(sessionRecords)
            //recommand(diffArray)
            alert('end of session');

        };
        //


if(command==="startSession")
{
    StartSession(SessionArray);
}


if(command==="endSession")
{
    EndSession(SessionArray);
}








    };

