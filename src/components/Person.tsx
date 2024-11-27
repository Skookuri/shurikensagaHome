"use client";

// import React from "react";
import { FaLinkedin, FaGithub, FaMusic } from "react-icons/fa";
import { Link } from "wouter";

// Update the PersonProps interface to properly handle 'img' as a string or an imported image file
interface PersonProps {
    name: string;
    imgLink: string;  // img should be a string, representing the URL or path of the image
    roles: string[]; // Roles as an array of strings
    links: string[]; // Links as an array of strings
}

const Person = ({ name, imgLink, roles, links }: PersonProps) => {
    return (
        <div className="flex flex-col p-8 border-2 border-red-500 items-center justify-center rounded-3xl">
            {/* Display Image */}
            <img src={imgLink} alt={`${name}'s picture`} className="w-24 h-24 rounded-full object-cover mb-4" />

            {/* Display Name */}
            <div>{name}</div>

            {/* Render Roles */}
            <div className="flex flex-row gap-5">
                {roles.map((role, index) => (
                    <div key={index}>{role}</div>
                ))}
            </div>

            {/* Render Links */}
            <div>
                {links.map((link, index) => {
                    // Check if the link is a LinkedIn URL
                    if (link.includes("linkedin.com")) {
                        return (
                            <Link key={index} href={link}><FaLinkedin className="inline" /></Link>
                        );
                    } else if (link.includes("github.com")) {
                        return (
                            <Link key={index} href={link}><FaGithub className="inline" /></Link>
                        );
                    } else if (link.includes("wavyrn.com")) {
                        return (
                            <Link key={index} href={link}><FaMusic className="inline" /></Link>
                        );
                    } else if (link.includes("marcyumusic.com")) {
                        return (
                            <Link key={index} href={link}><FaMusic className="inline" /></Link>
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