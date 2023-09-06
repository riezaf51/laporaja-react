import loadingGif from "../Images/loading.gif";

function Loading() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <img height="50px" src={loadingGif} alt="Loading..." />
        </div>
    );
}

export default Loading;