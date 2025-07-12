import ProfilePhotoSection from "./ProfilePhotoSection";

function AboutMeSection() {
    return (
        <div className="about-block block">
          <div className="about-block-top">
            <ProfilePhotoSection />
          </div>
          <div className="about-me-title">ABOUT ME</div>
          <InterestSection />
          <ExperienceSection />
        </div>
    );
}

function InterestSection() {
    return (
        <div>Interest Section</div>
    );
}

function ExperienceSection() {
    return (
        <div>Experience Section</div>
    );
}

export default AboutMeSection;