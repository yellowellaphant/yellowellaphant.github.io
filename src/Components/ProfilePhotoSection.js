function ProfilePhotoSection() {
    return (
    <div className="profile-photo block">
        <div className="profile-image-wrapper">
            <img src="/profile-sketch-real.png" className="profile-image" id="profile-image-outline"></img>
            <img src="/profile-sketch-color.png" className="profile-image" id="profile-image-fill"></img>
        </div>
    </div>
);
}

export default ProfilePhotoSection;