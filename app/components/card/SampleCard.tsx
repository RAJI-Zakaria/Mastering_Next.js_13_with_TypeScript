import React from 'react';
import Image from 'next/image';

interface SampleCardProps {
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
        height: number;
        width: number;
    }
    //optional attributes
    additionalAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

const SampleCard = ({ title, description, image, additionalAttributes }: SampleCardProps) => {
    const { src, alt, height, width } = image;

    return (
        <div className="card"  {...additionalAttributes}>
            <div className="card-body bg-base-100 shadow-xl">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
            <figure>
                <Image src={src} alt={alt} height={height} width={width}   />
            </figure>
        </div>
    );
};

export default SampleCard;
