"use client";

interface TitleProps {
    titleText: string;
}

const Title = ({ titleText }: TitleProps) => {
    return (
        <div className="text-2xl">{titleText}</div>
    );
};

export default Title;