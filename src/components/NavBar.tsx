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
        <nav className="fixed font-normal">
            <ul className="flex space-x-4">
                {sectionNames.map((sectionName, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleScroll(sectionIDs[index])}
                            className="hover:underline"
                        >
                            {sectionName}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;