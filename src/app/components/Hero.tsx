import Image from 'next/image';
import { Button } from "./ui/Button";
const Hero = () => {
    return (
        <div className="flex ">
            <div className="flex flex-col justify between p-5">
                <p className="text-[#193766] font-[DM Sans] pb-5 font-bold leading-10">
                    Beautiful Design<br/> For <u>Social Media</u><br/> Content
                </p>
                <p className=" text-[#697B98]">
                    Figma social media content templates for branding<br/> marketing insights, and <br/> more. Free for personal and commercial use!
                </p>
                <div className= "flex gap-8 pt-5">
                <Button className="h-[43px]" variant="default" size="default">Download Now</Button>
                <Button className="h-[43px]" variant="default" size="default">See in Action</Button>
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