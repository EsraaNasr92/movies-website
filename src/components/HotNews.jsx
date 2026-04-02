import { useEffect, useState } from "react";
import VeryfiedIcon from "../assets/images/icons/Veryfied Icon.svg";
import Image from "../assets/images/news/Image.png";

export default function HotNews(){
    const hotNews = [
        {
            id: "1",
            description: [
            `"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.`,
            "The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.",
            "Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series."
            ],
            date: "25 July"
        },
        {
            id: "2",
            description: [
            `"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.`,
            "The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.",
            "Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series."
            ],
            date: "20 April"
        },
        {
            id: "3",
            description: [
            `"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.`,
            "The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.",
            "Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series."
            ],
            date: "1 August"
        },
        {
            id: "4",
            description: [
            `"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.`,
            "The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.",
            "Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series."
            ],
            date: "1 September"
        },
        {
            id: "5",
            description: [
            `"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.`,
            "The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.",
            "Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series."
            ],
            date: "23 October"
        },
        {
            id: "6",
            description: [
            `"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.`,
            "The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.",
            "Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series."
            ],
            date: "8 November"
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % hotNews.length)
        }, 3000);
        return () => clearInterval(interval);
    },[hotNews.length]);

    const currentItem = hotNews[index];

    return(
        <div className="hot-news-frame">
            <section className="flex text-white gap-[29px] overflow-x-auto w-[240px] rounded-xl">
                    <div className="card rounded-[20px] p-3 w-224">
                        <img src={Image} alt="image 1" />
                        <div className="title flex mt-8 mb-5">
                            <img src={VeryfiedIcon} alt="veryfied icon" className="pr-2"/>
                            <h4 className="text-primary font-secondary">Hot News</h4>
                        </div>
                        
                            <div key={currentItem.id} className="text mb-20 font-main text-[14px]/6">
                            {currentItem.description.map((line, i) => (
                                <p key={i} className="mb-4">
                                    {line}
                                </p>
                            ))}
                            </div>
                        

                        <div className="meta flex justify-between">
                            <div className="date text-secondary text-sm">{currentItem.date}</div>
                            <div className="counter text-sm">{currentItem.id}/6</div>
                        </div>
                    </div>
            </section>
        </div>
    )
}