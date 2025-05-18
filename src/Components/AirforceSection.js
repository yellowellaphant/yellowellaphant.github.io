import '../styles.css';

function AirforceSection() {
    return (
    <div className="airforce-block block">
        <div className="airforce-logo-wrapper">
            <img id="airforce-logo-filled" className="airforce-logo" src="/AF-Filled.png" alt="filled U.S. Air Force Logo"/>
            <img id="airforce-logo-outline" className="airforce-logo" src="/AF-Outline.png" alt="sketched ouline of a U.S. Air Force Logo"/>
        </div>
    </div>
);
}

export default AirforceSection;