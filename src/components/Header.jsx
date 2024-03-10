const Header = () => {
    return (
        <>
        <div className="relative">
            <img src="/assets/apo_header.png" alt="Header" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-[#0F3B8E] text-7xl font-bold" style={{marginTop: '-120px', fontFamily: 'Playfair Display'}}>Alpha Phi Omega UBC</h1>
            </div>
        </div>
        </>
    )
}

export default Header