"use client";

import NavBar from "./NavBar";
import Person from "./Person";
import Title from "./Title";

export default function Homepage() {
    const sectionNames = ["PLAY GAME", "MEET THE TEAM", "OUR COMPOSER"];
    const sectionIDs = ["gamePlay", "team", "composer"];

    return (
        <>
            <NavBar sectionNames={sectionNames} sectionIDs={sectionIDs} />
            <div className="flex flex-col justify-center">
                <section id="hero" className="p-10 flex flex-col justify-center items-center min-h-screen bg-[#613a77]"
                    style={{
                        backgroundImage: 'url("https://media.discordapp.net/attachments/882553858788843604/1312212921413144577/art.png?ex=674bad04&is=674a5b84&hm=354baed21ee04643a2108befbfb93c6d9e3bf06c3ea3874cca415d73dd7a2912&=&format=webp&quality=lossless&width=1000&height=1000")',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <div className="fixed z-0 text-white flex flex-col items-center">
                        <div className="p-4 text-[200px]">Shuriken Saga</div>
                        <button className="p-2 border-2 border-white rounded-md text-[50px] hover:bg-white hover:text-black duration-500 max-w-fit">Play Now</button>
                    </div>
                </section>
                <section id="gamePlay" className="z-10 p-10 flex flex-col justify-center items-center bg-[#13121e]">
                    {/* <iframe frameborder="0" src="https://itch.io/embed-upload/12101564?color=333333" allowfullscreen="" width="1280" height="760"><a href="https://shuriken-saga.itch.io/shuriken-saga">Play Shuriken Saga on itch.io</a></iframe> */}
                </section>
                <section id="team" className="p-10 bg-[#613a77] z-10 text-white"> {/* MEET THE TEAM */}
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
                <section id="composer" className="min-h-screen bg-[#13121e] z-10 text-white"> {/* OUR COMPOSER */}
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
            </div>
        </>
    );
}