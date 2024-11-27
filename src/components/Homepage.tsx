// import { Link } from "wouter";
import NavBar from "./NavBar";
import Person from "./Person";
import Title from "./Title";

export default function Homepage() {
    const sectionNames = ["HERO", "MEET THE TEAM", "OUR COMPOSER"];
    const sectionIDs = ["hero", "team", "composer"];

    return (
        <>
            <NavBar sectionNames={sectionNames} sectionIDs={sectionIDs} />
            <div className="p-4">Shuriken Saga</div>
            <section id="hero" className="p-10 min-h-screen bg-blue-500"> {/* HERO */}
                <div>fill</div>
            </section>
            <section id="team" className="p-10"> {/* MEET THE TEAM */}
                <Title titleText="MEET THE TEAM" />
                <div className="flex flex-row place-content-around border-green-500 border-2">
                    <Person
                        name="Alyssa Williams"
                        imgLink="https://media-be.chewy.com/wp-content/uploads/2024/07/08103649/facts-about-ferrets-1024x615.jpg"
                        roles={["Art", "Code", "Website", "Project Management"]}
                        links={[
                            "https://www.linkedin.com/in/wiriamuzu/",
                            "https://github.com/skookuri",
                        ]}
                    />
                    <Person
                        name="Massimo Bottari"
                        imgLink="https://media-be.chewy.com/wp-content/uploads/2024/07/08103649/facts-about-ferrets-1024x615.jpg"
                        roles={["Code"]}
                        links={["https://www.linkedin.com/in/massimo-bottari-39339a2aa/", "https://github.com/Masmooo"]}
                    />
                    <Person
                        name="Lance Haugh"
                        imgLink="https://media-be.chewy.com/wp-content/uploads/2024/07/08103649/facts-about-ferrets-1024x615.jpg"
                        roles={["Code"]}
                        links={["https://github.com/lhaugh01"]}
                    />
                    <Person
                        name="Boston-Blue Giovannini"
                        imgLink="https://media-be.chewy.com/wp-content/uploads/2024/07/08103649/facts-about-ferrets-1024x615.jpg"
                        roles={["Code"]}
                        links={["https://github.com/untitled-Terran"]}
                    />
                </div>
            </section>
            <section id="composer" className="min-h-screen"> {/* OUR COMPOSER */}
                <Title titleText="OUR COMPOSER" />
                <div className="flex justify-center">
                    <Person
                        name="Marc Yu"
                        imgLink="https://marcyumusic.com/static/media/marc_yu.2aa35e4a782d9a8ef23a.jpeg"
                        roles={["Music", "SFX"]}
                        links={["https://www.wavyrn.com", "https://www.marcyumusic.com"]}
                    />
                </div>
            </section>
        </>
    );
}