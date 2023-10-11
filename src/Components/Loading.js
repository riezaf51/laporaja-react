import loadingGif from "../Images/loading.gif";

export default function Loading({ padded = true }) {
    return (
        <div className={"container d-flex justify-content-center align-items-center " + (padded && 'min-vh-100')} >
            <img height="50px" src={loadingGif} alt="Loading..." />
        </div >
    );
}
