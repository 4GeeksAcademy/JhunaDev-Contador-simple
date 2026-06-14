function SecondsCounter(props){
    return(
        <div className="d-flex justify-content-center align-items-center bg-dark text-white p-3 rounded gap-2 fs-1 m-5">

            <div className="bg-secondary p-3 rounded text-center" style={{ minWidth: "70px" }}>
                <i className="bi-stopwatch"></i>
            </div>

            <div className="bg-secondary p-3 rounded text-center" style={{ minWidth: "70px" }}>
                {Math.floor(props.counter / 100000) % 10}
            </div>

            <div className="bg-secondary p-3 rounded text-center" style={{ minWidth: "70px" }}>
                {Math.floor(props.counter / 10000) % 10}
            </div>

            <div className="bg-secondary p-3 rounded text-center" style={{ minWidth: "70px" }}>
                {Math.floor(props.counter / 1000) % 10}
            </div>

            <div className="bg-secondary p-3 rounded text-center" style={{ minWidth: "70px" }}>
                {Math.floor(props.counter / 100) % 10}
            </div>

            <div className="bg-secondary p-3 rounded text-center" style={{ minWidth: "70px" }}>
                {Math.floor(props.counter / 10) % 10}
            </div>

            <div className="bg-secondary p-3 rounded text-center" style={{ minWidth: "70px" }}>
                {Math.floor(props.counter / 1) % 10}
            </div>

        </div>
    )
}
export default SecondsCounter 