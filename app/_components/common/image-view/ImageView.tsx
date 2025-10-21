import Image from "next/image";

interface ImageViewProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}
export  function ImageView({src,alt,height,width,className=""}: ImageViewProps)
{
    return (
        <Image src={src} alt={alt} height={height} width={width} className={className}/>
    );
}

