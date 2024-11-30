"use client";

interface NavBarProps {
    sectionNames: string[]; // Names of the sections for the navbar
    sectionIDs: string[];   // IDs corresponding to those sections
}

const NavBar = ({ sectionNames, sectionIDs }: NavBarProps) => {
    // Ensure both arrays have the same length
    if (sectionNames.length !== sectionIDs.length) {
        console.error("Mismatch between sectionNames and sectionIDs lengths!");
        return null;
    }

    const handleScroll = (sectionID: string) => {
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full p-6 bg-transparent z-50 flex flex-wrap justify-between items-center">
            <h2 className="text-2xl text-yt font-semibold">ShurikenSaga</h2>
            <nav className="flex space-x-8">
                <ul className="flex space-x-8">
                    {sectionNames.map((sectionName, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleScroll(sectionIDs[index])}
                                className="text-yt text-lg font-medium relative group"
                            >
                                {sectionName}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yt scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
