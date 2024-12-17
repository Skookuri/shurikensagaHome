"use client";

import { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Person from "./Person";
import Title from "./Title";
import Gallery from "./Gallery";
import { FaPlay } from "react-icons/fa";
import LazyLoad from "vanilla-lazyload";
import logoImg from "/src/images/logo.png";
// import logoImg2 from "/src/images/logo2.png";
// import bgImg from "/src/images/art_large_background.png"
// import flowersImg from "/src/images/art_large_flowers.png" 
// import mtnsImg from "/src/images/art_large_mountains.png"
import fujiImg from "/src/images/art_large_fuji.png";
import moonImg from "/src/images/art_large_moon.png";
import mtnImg from "/src/images/art_large_mountain.png";
import ninjaImg from "/src/images/art_large_ninja.png";
import riverImg from "/src/images/art_large_water.png";

import massimo from "/src/images/massimo.jpg";
import alyssa from "/src/images/alyssa.png";
import lance from "/src/images/lance.jpg";
import ananta from "/src/images/ananta.jpg";
import julian from "/src/images/julian.jpg";
import boston from "/src/images/boston.jpg";
import neil from "/src/images/neil.png";

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
            <div className="flex flex-col justify-center bg-coolPurp-700 w-screen m-0 overflow-hidden">
                <section id="hero" className="min-w-screen relative p-10 flex flex-col justify-center items-center min-h-screen bg-coolPurp-700 overflow-hidden bg-gradient-to-b from-warmPurp-700 via-transparent to-transparent">
                    <img
                        ref={moonRef}
                        className="absolute top-48 -left-96 w-full h-auto z-1"
                        src={moonImg}
                        alt="Moon"
                    />
                    <img
                        ref={mountainRef}
                        className="absolute top-0 left-0 w-full h-auto z-2"
                        src={mtnImg}
                        alt="Mountain"
                    />
                    <img
                        ref={fujiRef}
                        className="absolute top-0 left-48 w-full h-auto z-3"
                        src={fujiImg}
                        alt="Mt Fuji"
                    />
                    <img
                        ref={riverRef}
                        className="absolute top-86 left-0 w-full h-auto z-4"
                        src={riverImg}
                        alt="River"
                    />
                    <img
                        ref={ninjaRef}
                        className="absolute top-86 left-0 w-full h-auto z-5"
                        src={ninjaImg}
                        alt="Ninja"
                    />
                    
                    <div ref={titleRef} className="text-yt top-12 absolute flex flex-col items-center">
                        <img
                            src={logoImg}
                            alt="Logo"
                            width="1200px"
                            height="auto"
                            className="z-6"
                        />
                        <div className="flex flex-row gap-6 z-7 -mt-20">
                            <button onClick={() => handleScroll("gamePlay")} className="p-2 border-2 border-yt bg-yt rounded-full text-warmPurp-700 text-[50px] hover:bg-warmPurp-700 hover:text-yt duration-500 max-w-fit">Play Now</button>
                            <button onClick={() => handleScroll("trailer")} className="p-2 border-2 border-yt bg-warmPurp-700 rounded-full text-yt text-[50px] hover:bg-yt hover:text-warmPurp-700 hover:border-warmPurp-700 duration-500 max-w-fit flex flex-row items-center justify-center">
                                <FaPlay/>
                                <div>Watch Trailer</div>
                            </button>
                        </div>
                    </div>  
                </section>
                <section id="trailer" className="w-screen p-10 flex flex-col justify-center items-center min-h-screen bg-warmPurp-500 text-lg text-yt">
                    <iframe className="lazy player-ratio" width="1000" height="500" src="https://www.youtube.com/embed/Ikb7gHcYW-8?si=u06KI5IkjyTGg8DE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <div>You play as a fallen ninja, the last survivor of your clan after they were massacred in a brutal war (ikusa) instigated by a tyrannical shogun overlord in Warring States period Japan. Stripped of everything you held dear, you’re haunted by the loss and determined to bring justice to those responsible. In search of purpose and peace, you visit a secluded temple to offer prayers for strength and guidance. But as you kneel, memories of your family drive you to a new resolve: you won’t find peace until the shogun is defeated, and your family’s legacy is reclaimed. </div>
                </section>
                <section id="team" className="p-10 flex flex-col justify-center items-center bg-warmPurp-600 z-10 text-yt min-h-screen">
                    <Title titleText="MEET THE TEAM" />
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col flex-wrap place-content-around">
                            <Person
                                name="Alyssa Williams"
                                background="Tufts University 2025"
                                major="Computer Science / CBS"
                                imgLink={alyssa}
                                roles={["Art", "Code", "Website", "Project Management"]}
                                links={[
                                    "https://www.linkedin.com/in/wiriamuzu/",
                                    "https://github.com/skookuri",
                                ]}
                            />
                            <Person
                                name="Massimo Bottari"
                                background="Tufts University 2027"
                                major="Computer Science"
                                imgLink={massimo}
                                roles={["Code", "Level Design"]}
                                links={[
                                    "https://www.linkedin.com/in/massimo-bottari-39339a2aa/",
                                    "https://github.com/Masmooo",
                                ]}
                            />
                        </div>
                        <Gallery/>
                        <div className="flex flex-col flex-wrap place-content-around">
                            <Person
                                name="Lance Haugh"
                                background="Tufts University 2027"
                                major="Computer Science"
                                imgLink={lance}
                                roles={["Code", "Level Design"]}
                                links={["https://github.com/lhaugh01"]}
                            />
                            <Person
                                name="Boston-Blue Giovannini"
                                background="Tufts University 2027"
                                major="Computer Science"
                                imgLink={boston}
                                roles={["Code", "UI", "Videographer"]}
                                links={["https://github.com/untitled-Terran", "https://www.linkedin.com/in/bostonquinn/"]}
                            />
                        </div>
                    </div>
                </section>

                <section id="composer" className="p-10 flex flex-col justify-center items-center min-h-screen bg-coolPurp-700 z-10 text-yt">
                    <Title titleText="MUSIC" />
                    <div className="flex flex-col justify-center items-center">
                        <iframe className="rounded-sm w-[300px] h-auto" src="https://open.spotify.com/embed/track/3fxzqmi2j5iXCBYQK4T6EL?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <div className="flex flex-row flex-wrap place-content-around">
                            <Person
                                name="Marc Yu"
                                background="Wavyrn Co-Founder"
                                major=""
                                imgLink="https://marcyumusic.com/static/media/marc_yu.2aa35e4a782d9a8ef23a.jpeg"
                                roles={["Audio Supervisor", "Composer"]}
                                links={["https://www.wavyrn.com", "https://www.marcyumusic.com"]}
                            />
                            <Person
                                name="Neil Small"
                                background="Berklee College of Music 2025"
                                major=""
                                imgLink={neil}
                                roles={["Sound Designer"]}
                                links={["https://www.wavyrn.com"]}
                            />
                            <Person
                                name="Julian Cabrera"
                                background="Wavyrn Sound Designer"
                                major=""
                                imgLink={julian}
                                roles={["Sound Designer"]}
                                links={["https://www.wavyrn.com"]}
                            />
                            <Person
                                name="Ananta Arora"
                                background="Wavyrn Co-Founder"
                                major=""
                                imgLink={ananta}
                                roles={["Studio Manager"]}
                                links={["https://www.wavyrn.com"]}
                            />
                        </div>
                    </div>
                </section>
                <section id="gamePlay" className="z-10 p-10 flex flex-col justify-center items-center min-h-screen bg-coolPurp-700">
                    <div className="p-5">
                        <iframe src="https://itch.io/embed-upload/12224310?color=724789" width="1280" height="760"><a href="https://shuriken-saga.itch.io/shuriken-saga">Play Shuriken Saga on itch.io</a></iframe>
                        <iframe src="https://itch.io/embed-upload/12285970?color=724789" width="1280" height="760"><a href="https://shuriken-saga.itch.io/shuriken-saga">Play Shuriken Saga on itch.io</a></iframe>
                    </div>
                </section>
            </div>
        </>
    );
}