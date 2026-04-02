export default function Menu(){
    const menu = [
        {
            label: "All",
            path: "/"
        },
        {
            label: "Movies",
            path: "/movies"
        },
        {
            label: "Series",
            path: "/series"
        },
        {
            label: "Genres",
            children: [
                {
                    label: "Action",
                    path: "/genere/action"
                },
                {
                    label: "Comedy",
                    path: "/genere/comedy"
                },
                {
                    label: "Drama",
                    path: "/genere/drama"
                },
            ],
        },
    ];
    return(
        <nav>
            <ul className="flex gap-6 text-white">
                {menu.map((item, index) => (
                    <li key={index} className="relative group cursor-pointer">
                        <span>{item.label}</span>

                        {item.children ? (
                            <ul className="absolute top-full hidden group-hover:block z-10 bg-black min-w-[150px]">
                                {item.children.map((child, i) => (
                                <li
                                    key={i}
                                    className="px-4 py-2 hover:bg-black cursor-pointer hover:text-[var(--color-primary)]"
                                >
                                    {child.label}
                                </li>
                                ))}
                            </ul>
                        ) : null}

                    </li>
                ))}
                
            </ul>
        </nav>
    )
}