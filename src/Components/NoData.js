export default function NoData({ padded = true }) {
    return (
        <div className={"container d-flex justify-content-center align-items-center " + (padded && 'min-vh-100')} >
            <h6>Tidak ada data</h6>
        </div >
    );
}
