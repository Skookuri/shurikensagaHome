"use client";

import { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Person from "./Person";
import Title from "./Title";

export default function Homepage() {
    const sectionNames = ["HOME", "PLAY GAME", "MEET THE TEAM", "OUR COMPOSER"];
    const sectionIDs = ["hero", "gamePlay", "team", "composer"];

    const skyRef = useRef<HTMLImageElement>(null);
    const moonRef = useRef<HTMLImageElement>(null);
    const mountainRef = useRef<HTMLImageElement>(null);
    const fujiRef = useRef<HTMLImageElement>(null);
    //const mountainsRef = useRef<HTMLImageElement>(null);
    const riverRef = useRef<HTMLImageElement>(null);
    const flowersRef = useRef<HTMLImageElement>(null);
    const ninjaRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLImageElement>(null);

    const handleScroll = (sectionID: string) => {
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleParallax = () => {
            const scrollY = window.scrollY;

            if (skyRef.current) {
                skyRef.current.style.transform = `translateX(${scrollY * 0.25}px)`;
            }
            if (moonRef.current) {
                moonRef.current.style.transform = `translateY(${scrollY * -0.75}px)`;
            }
            if (mountainRef.current) {
                mountainRef.current.style.transform = `translateY(${scrollY * -0.5}px)`;
            }
            if (fujiRef.current) {
                fujiRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
            }
            if (riverRef.current) {
                riverRef.current.style.transform = `translateY(${scrollY * -0.25}px)`;
            }
            if (ninjaRef.current) {
                ninjaRef.current.style.transform = `translateY(${scrollY * -0.5}px)`;
            }

            if (titleRef.current) {
                titleRef.current.style.transform = `translateY(${scrollY * -1.7}px)`;
            }
        };

        window.addEventListener("scroll", handleParallax);
        return () => {
            window.removeEventListener("scroll", handleParallax);
        };
    }, []);

    return (
        <>
            <NavBar sectionNames={sectionNames} sectionIDs={sectionIDs} />
            <div className="flex flex-col justify-center">
                <section
                    id="hero"
                    className="relative p-10 flex flex-col justify-center items-center min-h-screen bg-coolPurp-700 overflow-hidden">
                    <img
                        ref={moonRef}
                        className="absolute top-32 left-0 w-full h-auto z-1"
                        src="https://media.discordapp.net/attachments/882553858788843604/1312284411395571782/art_large_moon.png?ex=674bef98&is=674a9e18&hm=1543aed28618842d431fbee6e3076cc1e6d439b710a7553c37135e80ad76fc89&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="Moon"
                    />
                    <img
                        ref={mountainRef}
                        className="absolute top-0 left-0 w-full h-auto z-2"
                        src="https://media.discordapp.net/attachments/882553858788843604/1312284438310289408/art_large_mountain.png?ex=674bef9f&is=674a9e1f&hm=d51e58c1a8b0ab172dc712c94da961830c18ad2cda249b297c363fa8d733ddfc&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="Mountain"
                    />
                    <div ref={titleRef} className="text-yt top-10 absolute z-3 flex flex-col items-center">
                        <div ref={titleRef} className="p-4 text-[200px]">ShurikenSaga</div>
                        <button onClick={() => handleScroll("gamePlay")} className="p-2 border-2 border-yt rounded-full text-yt text-[50px] hover:bg-yt hover:text-coolPurp-700 duration-500 max-w-fit">Play Now</button>
                    </div>
                    <img
                        ref={fujiRef}
                        className="absolute top-0 left-0 w-full h-auto z-4"
                        src="https://media.discordapp.net/attachments/882553858788843604/1312284472938598511/art_large_fuji.png?ex=674befa7&is=674a9e27&hm=dfe66247abfe7577f4b69a22c2d9ef1707a613244d65408e88a6054f290d32d3&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="Mt Fuji"
                    />
                    <img
                        ref={riverRef}
                        className="absolute top-86 left-0 w-full h-auto z-6"
                        src="https://media.discordapp.net/attachments/882553858788843604/1312284650022113340/art_large_water.png?ex=674befd1&is=674a9e51&hm=ef310b307c836995000a54c431438569504c36be9c6bd5adf22c77d9fbd3b36b&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="River"
                    />
                    {/* <img
                        ref={flowersRef}
                        className="absolute top-0 left-0 w-full h-auto z-7"
                        src="https://media.discordapp.net/attachments/882553858788843604/1312284675934257262/art_large_flowers.png?ex=674befd7&is=674a9e57&hm=44a04ad4e7974783bcb12d3c9b177dce462657b08e1822b8aef8cebdc7deb2fa&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="Flowers"
                    /> */}
                    <img
                        ref={ninjaRef}
                        className="absolute top-86 left-0 w-full h-auto z-8"
                        src="https://media.discordapp.net/attachments/882553858788843604/1312284993057329173/art_large_ninja.png?ex=674bf023&is=674a9ea3&hm=17a7c5d7368ccd6f4e536401827a3339aa4146c7e06dc5177c45b80d53a90c10&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="Ninja"
                    />
                </section>

                <section
                    id="gamePlay"
                    className="z-10 p-10 flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-warmPurp-700 to-transparent"
                >
                    <div className="p-5">
                        {/* <iframe frameborder="0" src="https://itch.io/embed-upload/12101564?color=333333" allowfullscreen="" width="1280" height="760"><a href="https://shuriken-saga.itch.io/shuriken-saga">Play Shuriken Saga on itch.io</a></iframe> */}
                    </div>
                </section>

                <section id="team" className="p-10 bg-warmPurp-600 z-10 text-yt">
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
                            links={[
                                "https://www.linkedin.com/in/massimo-bottari-39339a2aa/",
                                "https://github.com/Masmooo",
                            ]}
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

                <section id="composer" className="min-h-screen bg-[#13121e] z-10 text-yt">
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