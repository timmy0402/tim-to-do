function Header() {
    return (
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">

                <rect width="64" height="64" rx="8" ry="8" fill="#f5f5f5" stroke="#ccc" strokeWidth="2" />


                <g fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="12" y="16" width="8" height="8" rx="2" ry="2" />
                    <line x1="26" y1="20" x2="52" y2="20" />

                    <rect x="12" y="28" width="8" height="8" rx="2" ry="2" />
                    <line x1="26" y1="32" x2="52" y2="32" />

                    <rect x="12" y="40" width="8" height="8" rx="2" ry="2" />
                    <line x1="26" y1="44" x2="52" y2="44" />
                </g>
            </svg>
            <h1>TODO</h1>
        </header>
    );
}

export default Header;