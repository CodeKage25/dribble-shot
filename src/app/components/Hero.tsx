import Image from 'next/image';
import { Button } from "./ui/Button";
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
                <div className= "flex gap-8 pt-5">
                <Button className="" variant="default" size="default">Download Now</Button>
                <Button className="" variant="default" size="default">See in Action</Button>
                </div>
            </div>
            <div>
                <div className="flex">
                    <Image alt="" src="" />
                    <Image alt="" src="" />
                    <Image alt="" src="" />
                </div>
                <div>
                    <Image alt="" src="" />
                    <Image alt="" src="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;