const Cards = () => {
    const cardList = [
        {
            logo: '#',
            name: "For Designer",
            description: "Busy designers want to share insights, such as tips, tricks or other types of insights. Focus on content not on design."
        },
        {
            logo: '#',
            name: "For Coder",
            description: "Coders who want to share snippets, tools, or tips and tricks. No design skills required: just duplicate, edit and export!"
        },
        {
            logo: '#',
            name: "For Marketer",
            description: "Promote the product in an elegant and attractive way to get more attention from potential customers. Just duplicate and export!"
        },
    ]

    return (
        <div className="flex justify-center items-center flex-col">
            <div>
                <p>
                Figma Social Feeds is designed for <br/> everyone. Use for whatever you want,<br/> it’s completely free!
                </p>
            </div>
            <div className="flex justify-between">
            {cardList.map((card, id) => (
                <div key={id} className="flex flex-col justify-center">
                    <div>{card.logo}</div>
                    <div>{card.name}</div>
                    <div>{card.description}</div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Cards;