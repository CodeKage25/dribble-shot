
// import { Button } from "./ui/Button";

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
        <div className="flex justify-around">
            <div>
                Wumbo
            </div>
            {navList.map((list, id) => (
                <div key={id} className= "flex justify-between">
                    {list.name}
                </div>
            ))}
            <div>
                <button className="bg-white">Download</button>
            </div>
        </div>
    )
}

export default Nav;