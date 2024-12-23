"use client";

// import React from "react";
import { FaLinkedin, FaGithub, FaMusic } from "react-icons/fa";
import { Link } from "wouter";

// Update the PersonProps interface to properly handle 'img' as a string or an imported image file
interface PersonProps {
    name: string;
    imgLink: string; // img should be a string, representing the URL or path of the image
    roles: string[]; // Roles as an array of strings
    links: string[]; // Links as an array of strings
    background: string;
    major: string;
}

const Person = ({ name, imgLink, roles, links, background, major }: PersonProps) => {
    return (
        <div className="flex flex-col p-8 border-2 bg-warmPurp-500 items-center justify-center rounded-3xl max-w-[280px] w-[280px]">
            {/* Display Image */}
            <img
                src={imgLink}
                alt={`${name}'s picture`}
                className="w-24 h-24 rounded-full object-cover object-center mb-4 transform scale-150 hover:scale-[1.6] transition-transform duration-300"
            />

            {/* Display Name */}
            <div className="font-bold text-2xl text-center">{name}</div>
            
            {/* Background */}
            <div className="italic text-center">{background}</div>
            <div className="italic">{major}</div>

            {/* Render Roles */}
            <div className="mt-2 text-center">
                {roles.join(" • ")}
            </div>

            {/* Render Links */}
            <div className="flex flex-row gap-2 mt-4 text-3xl">
                {links.map((link, index) => {
                    // Check if the link is a LinkedIn URL
                    if (link.includes("linkedin.com")) {
                        return (
                            <Link key={index} href={link}>
                                <FaLinkedin className="inline" />
                            </Link>
                        );
                    } else if (link.includes("github.com")) {
                        return (
                            <Link key={index} href={link}>
                                <FaGithub className="inline" />
                            </Link>
                        );
                    } else if (
                        link.includes("wavyrn.com") ||
                        link.includes("marcyumusic.com")
                    ) {
                        return (
                            <Link key={index} href={link}>
                                <FaMusic className="inline" />
                            </Link>
                        );
                    } else {
                        return (
                            <Link key={index} href={link}>
                                {link}
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Person;