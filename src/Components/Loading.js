import loadingGif from "../Images/loading.gif";

export default function Loading() {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100">
            <img height="50px" src={loadingGif} alt="Loading..." />
        </div>
    );
}
