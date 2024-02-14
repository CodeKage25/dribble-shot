'use client'
import Image from 'next/image';
const Hero = () => {
    return (
        <div className="flex ">
            <div className="flex flex-col justify between p-5">
                <h3>
                    Beautiful Design For Social Media Content
                </h3>
                <p>
                    Figma social media content templates for branding marketing insights, and more. Free for personal and commercial use!
                </p>
                <div className= "flex gap-8">
                <button className="">Download Now</button>
                <button>See in Action</button>
                </div>
            </div>
            <div>
                <div className="flex">
                    <Image src="" />
                    <Image src="" />
                    <Image src="" />
                </div>
                <div>
                    <Image src="" />
                    <Image src="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;