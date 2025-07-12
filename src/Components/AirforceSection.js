import '../styles.css';

function AirforceSection() {
    return (
    <div className="airforce-block block">
        <div>
            <h3>SERVED 6 YEARS IN THE</h3>
        </div>
        <div className="airforce-logo-wrapper">
            <img id="placeholder-af-logo" aria-hidden="true" className="airforce-logo" src="/AF-Filled.png" alt=""/>
            <img id="airforce-logo-filled" className="airforce-logo" src="/AF-Filled.png" alt="filled United States Air Force Logo"/>
            <img id="airforce-logo-outline" className="airforce-logo" src="/AF-Outline.png" alt="sketched outline of a United States Air Force Logo"/>
        </div>
        <div id="under-af-logo-text">
            <h3>U.S. AIR FORCE</h3>
        </div>
    </div>
);
}

export default AirforceSection;