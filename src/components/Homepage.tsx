"use client";

import { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Person from "./Person";
import Title from "./Title";
import { FaPlay } from "react-icons/fa";
import LazyLoad from "vanilla-lazyload";

export default function Homepage() {
    const sectionNames = ["HOME", "TRAILER", "MEET THE TEAM", "OUR COMPOSER", "PLAY GAME"];
    const sectionIDs = ["hero", "trailer", "team", "composer", "gamePlay"];

    const skyRef = useRef<HTMLImageElement>(null);
    const moonRef = useRef<HTMLImageElement>(null);
    const mountainRef = useRef<HTMLImageElement>(null);
    const fujiRef = useRef<HTMLImageElement>(null);
    const riverRef = useRef<HTMLImageElement>(null);
    const ninjaRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    const handleScroll = (sectionID: string) => {
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const lazyLoadInstance = new LazyLoad();

        const handleParallax = () => {
            const scrollY = window.scrollY;

            if (skyRef.current) {
                skyRef.current.style.transform = `translateX(${scrollY * 0.25}px)`;
            }
            if (moonRef.current) {
                moonRef.current.style.transform = `translateY(${scrollY * -1.75}px)`;
            }
            if (mountainRef.current) {
                mountainRef.current.style.transform = `translateY(${scrollY * -0.5}px)`;
            }
            if (fujiRef.current) {
                fujiRef.current.style.transform = `translateY(${scrollY * 1.25}px)`;
            }
            if (riverRef.current) {
                riverRef.current.style.transform = `translateY(${scrollY * -0.25}px)`;
            }
            if (ninjaRef.current) {
                ninjaRef.current.style.transform = `translateY(${scrollY * -0.25}px)`;
            }
            if (titleRef.current) {
                titleRef.current.style.transform = `translateY(${scrollY * -1.7}px)`;
            }
        };

        window.addEventListener("scroll", handleParallax);

        return () => {
            window.removeEventListener("scroll", handleParallax);
            lazyLoadInstance.destroy();
        };
    }, []);

    return (
        <>
            <NavBar sectionNames={sectionNames} sectionIDs={sectionIDs} />
            <div className="flex flex-col justify-center bg-coolPurp-700">
                <section id="hero" className="relative p-10 flex flex-col justify-center items-center min-h-screen bg-coolPurp-700 overflow-hidden bg-gradient-to-b from-warmPurp-700 via-transparent to-transparent">
                    <img
                        ref={moonRef}
                        className="absolute top-48 -left-96 w-full h-auto z-1"
                        src="https://media.discordapp.net/attachments/1283198836004749454/1313645976019406849/art_large_moon.png?ex=6750e3a7&is=674f9227&hm=486043f2c2525b571c8eb6a0b30adfc9a467e1e09804dbba11356f7f9bec6736&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="Moon"
                    />
                    <img
                        ref={mountainRef}
                        className="absolute top-0 left-0 w-full h-auto z-2"
                        src="https://media.discordapp.net/attachments/1283198836004749454/1313645976702943372/art_large_mountain.png?ex=6750e3a7&is=674f9227&hm=a14e76ab0ad5e4b644bcfa3599a2688787ed424299cce719b5ca784ee7cc36c6&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="Mountain"
                    />
                    <img
                        ref={fujiRef}
                        className="absolute top-0 left-48 w-full h-auto z-3"
                        src="https://media.discordapp.net/attachments/1283198836004749454/1313645976388636722/art_large_fuji.png?ex=6750e3a7&is=674f9227&hm=dee541ec16e9975c17d5cadaa13cd3db92159b5a0e2b87d47f9fc1299802ba49&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="Mt Fuji"
                    />
                    <img
                        ref={riverRef}
                        className="absolute top-86 left-0 w-full h-auto z-4"
                        src="https://media.discordapp.net/attachments/1283198836004749454/1313645977311121438/art_large_water.png?ex=6750e3a7&is=674f9227&hm=dae82afbc38f21b6ddd367673a8f56797b57f718552f35bef5ea4bc6226d2a61&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="River"
                    />
                    <img
                        ref={ninjaRef}
                        className="absolute top-86 left-0 w-full h-auto z-5"
                        src="https://media.discordapp.net/attachments/1283198836004749454/1313645977005064232/art_large_ninja.png?ex=6750e3a7&is=674f9227&hm=30af10ef7f9c54291033372bb3d00d0fdd0d1fdeab2bc8122dbf608009a35866&=&format=webp&quality=lossless&width=1170&height=1170"
                        alt="Ninja"
                    />
                    
                    <div ref={titleRef} className="text-yt top-10 absolute z-6 flex flex-col items-center">
                        <div ref={titleRef} className="p-4 text-[200px]">ShurikenSaga</div>
                        <div className="flex flex-row gap-6">
                            <button onClick={() => handleScroll("gamePlay")} className="p-2 border-2 border-yt bg-yt rounded-full text-warmPurp-700 text-[50px] hover:bg-warmPurp-700 hover:text-yt duration-500 max-w-fit">Play Now</button>
                            <button onClick={() => handleScroll("trailer")} className="p-2 border-2 border-yt bg-transparent rounded-full text-yt text-[50px] hover:bg-warmPurp-700 hover:text-yt duration-500 max-w-fit flex flex-row items-center justify-center">
                                <FaPlay/>
                                <div>Watch Trailer</div>
                            </button>
                        </div>
                    </div>  
                </section>
                <section id="trailer" className="p-10 flex flex-col justify-center items-center min-h-screen bg-warmPurp-500 text-lg text-yt">
                    <iframe className="lazy player-ratio" width="1000" height="500" src="" data-src="https://www.youtube.com/embed/S3xAeTmsJfg?si=IEV-DkBDKxXMNaJB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <div>You play as a fallen ninja, the last survivor of your clan after they were massacred in a brutal war (ikusa) instigated by a tyrannical shogun overlord in Warring States period Japan. Stripped of everything you held dear, you’re haunted by the loss and determined to bring justice to those responsible. In search of purpose and peace, you visit a secluded temple to offer prayers for strength and guidance. But as you kneel, memories of your family drive you to a new resolve: you won’t find peace until the shogun is defeated, and your family’s legacy is reclaimed. </div>
                </section>
                <section id="team" className="p-10 bg-warmPurp-600 z-10 text-yt">
                    <Title titleText="MEET THE TEAM" />
                    <div className="flex flex-row flex-wrap place-content-around">
                        <Person
                            name="Alyssa Williams"
                            year={2025}
                            major="Computer Science / CBS"
                            imgLink="https://media-be.chewy.com/wp-content/uploads/2024/07/08103649/facts-about-ferrets-1024x615.jpg"
                            roles={["Art", "Code", "Website", "Project Management"]}
                            links={[
                                "https://www.linkedin.com/in/wiriamuzu/",
                                "https://github.com/skookuri",
                            ]}
                        />
                        <Person
                            name="Massimo Bottari"
                            year={2026}
                            major="Computer Science"
                            imgLink="https://media-be.chewy.com/wp-content/uploads/2024/07/08103649/facts-about-ferrets-1024x615.jpg"
                            roles={["Code", "Level Design"]}
                            links={[
                                "https://www.linkedin.com/in/massimo-bottari-39339a2aa/",
                                "https://github.com/Masmooo",
                            ]}
                        />
                        <Person
                            name="Lance Haugh"
                            year={2026}
                            major="Computer Science"
                            imgLink="https://media-be.chewy.com/wp-content/uploads/2024/07/08103649/facts-about-ferrets-1024x615.jpg"
                            roles={["Code", "Level Design"]}
                            links={["https://github.com/lhaugh01"]}
                        />
                        <Person
                            name="Boston-Blue Giovannini"
                            year={2026}
                            major="Computer Science"
                            imgLink="https://media-be.chewy.com/wp-content/uploads/2024/07/08103649/facts-about-ferrets-1024x615.jpg"
                            roles={["Code", "Concept Design"]}
                            links={["https://github.com/untitled-Terran"]}
                        />
                    </div>
                </section>

                <section id="composer" className="min-h-screen bg-coolPurp-700 z-10 text-yt">
                    <Title titleText="OUR COMPOSER" />
                    <div className="flex flex-col justify-center items-center">
                        <iframe className="rounded-sm max-w-[700px]" src="https://open.spotify.com/embed/track/3fxzqmi2j5iXCBYQK4T6EL?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <Person
                            name="Marc Yu"
                            year={2}
                            major=""
                            imgLink="https://marcyumusic.com/static/media/marc_yu.2aa35e4a782d9a8ef23a.jpeg"
                            roles={["Music", "SFX"]}
                            links={["https://www.wavyrn.com", "https://www.marcyumusic.com"]}
                        />
                    </div>
                </section>
                <section id="gamePlay"
                    className="z-10 p-10 flex flex-col justify-center items-center min-h-screen bg-coolPurp-700">
                    <div className="p-5">
                        {/* <iframe src="https://itch.io/embed-upload/12101564?color=885d9a" width="1280" height="760"><a href="https://shuriken-saga.itch.io/shuriken-saga">Play Shuriken Saga on itch.io</a></iframe> */}
                    </div>
                </section>
            </div>
        </>
    );
}