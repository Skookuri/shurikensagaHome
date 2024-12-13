"use client";

interface TitleProps {
    titleText: string;
}

const Title = ({ titleText }: TitleProps) => {
    return (
        <div className="text-5xl text-extrabold">{titleText}</div>
    );
};

export default Title;