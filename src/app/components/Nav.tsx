import { Button } from "./ui/Button";

const Nav = () => {
    const navList = [
        {
            name: "Top",
        },
        {
            name: "For Everyone"
        },
        {
            name: "Features"
        },
        {
            name: "Preview"
        },
        {
            name: "Licence"
        }
    ]

    return (
        <div className="flex justify-around w-[100%]">
            <div className="w-[12%]">
                Wumbo
            </div>
            {navList.map((list, id) => (
                <div key={id} className= "flex justify-between w-[64%]">
                    {list.name}
                </div>
            ))}
            <div className="w-[25%]">
                <Button className="h-[43px] bg-white text-[
#3B82F6]" variant="default" size="default">Download</Button>
            </div>
        </div>
    )
}

export default Nav;