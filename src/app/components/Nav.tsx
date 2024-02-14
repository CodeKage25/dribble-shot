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
            <div className="w-[30%]">
                Wumbo
            </div>
            {navList.map((list, id) => (
                <div key={id} className= "flex justify-between pl-5 pr-5 w-[26%] text-[#193766]">
                    {list.name}
                </div>
            ))}
            <div className="w-[20%]">
                <Button className="h-[43px] bg-white text-[
#3B82F6]" variant="default" size="default">Download</Button>
            </div>
        </div>
    )
}

export default Nav;