function Header() {
    return (
        <header className="bg-light py-3 shadow-sm shadow">
            <nav className="container d-flex flex-column align-items-center justify-content-center gap-2">
                <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-fork-knife fs-3 text-danger"></i>
                    <h1 className="fs-4 mb-0">Chef Dome</h1>
                    <img src="/images/baffi.svg" alt="baffo" className="baffo" />
                </div>
                
            </nav>
        </header>
    );
}

export default Header;