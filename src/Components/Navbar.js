function Navbar() {
    return (
    <div className="navbar block">
        <div className="navbar-link-container">
            <NavbarLink name="Contact" location=""/>
            <NavbarLink name="Resume" location=""/>
            <NavbarLink name="Projects" location=""/>
        </div>
    </div>
);
}

function NavbarLink(props) {
    return(
        <div>
            <a className="navbar-link" href={props.location}>{props.name}</a>
        </div>
    );
}

export default Navbar;