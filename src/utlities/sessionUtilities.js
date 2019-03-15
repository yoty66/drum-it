

export const SessionControler=
    function(command,SessionArray)
    {

        // Taken from :https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts
        const clearTimeouts=()=> {
            var id = window.setTimeout(function () {
            }, 0);

            while (id--) {
                window.clearTimeout(id); // will do nothing if no timeout with id is present
            }
        }
        //

        //
        const clearPresentIndications=()=> {
            setInterval(()=>this.props.DisIndicateDrum(1),1000);
            setInterval(()=>this.props.DisIndicateDrum(2),1000);
            setInterval(()=>this.props.DisIndicateDrum(3),1000);
            setInterval(()=>this.props.DisIndicateDrum(4),1000);
            setInterval(()=>this.props.DisIndicateDrum(4),1000);
            setInterval(()=>this.props.DisIndicateDrum(5),1000);
            setInterval(()=>this.props.DisIndicateDrum(6),1000);
            setInterval(()=>this.props.DisIndicateDrum(7),1000);
            setInterval(()=>this.props.DisIndicateDrum(8),1000);
            setInterval(()=>this.props.DisIndicateDrum(9),1000);
        }
       //

        //
        const indicateInTime=
            (SessionArray)=>
            {

                SessionArray.forEach(({id,timeStamp})=>{ setTimeout(()=>{Indicate(id)},timeStamp)});
                const Indicate=(drumId)=>{
                    this.props.IndicateDrum(drumId);
                    setInterval(()=>this.props.DisIndicateDrum(drumId),1000);

                }
            };


        //
        //
        const StartSession=(SessionArray)=> {
            const StartMonitoring=()=> {
                localStorage.setItem('SessionStartTime', (new Date()).getTime());
                // console.log(localStorage.getItem('SessionStartTime'));
                localStorage.setItem('OnSession', 'True');
            };
            StartMonitoring();


            indicateInTime(SessionArray);

            alert('start session');
        };
        //


        //

        const EndSession =(SessionArray)=>{
            const StopMonitoring=()=> {
                localStorage.removeItem('SessionStartTime');
                localStorage.removeItem('OnSession');
                const sessionRecords = this.props.monitor;
                console.log('session logs:' , sessionRecords);

                this.props.EndSession();
                clearTimeouts();
                clearPresentIndications();
                return sessionRecords;
            };
           const sessionRecords=StopMonitoring();
            console.log('session array:' , SessionArray);

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

