import VeryfiedIcon from "../assets/images/icons/Veryfied Icon.svg";
import Image from "../assets/images/news/Image.png";

export default function HotNews(){
    return(
        <div className="hot-news-frame">
            <section className="flex text-white gap-[29px] overflow-x-auto w-[240px] rounded-xl">
                <div className="card rounded-[20px] p-3 w-224">
                    <img src={Image} alt="image 1" />
                    <div className="title flex mt-8 mb-4">
                        <img src={VeryfiedIcon} alt="veryfied icon" className="pr-2"/>
                        <h4 className="text-primary font-secondary font-bold">Hot News</h4>
                    </div>
                    <div className="text mb-13 font-main text-[13px]">
                        <p>"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.</p>
                        <br />
                        <p>The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.</p>
                        <br />
                        <p>Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series.</p>
                    </div>
                    <div className="meta flex justify-between">
                        <div className="date text-secondary text-sm">25 July</div>
                        <div className="counter text-sm">1/6</div>
                    </div>
                </div>
            {/*  <div className="card bg-[#1C1C1C] rounded-[20px] p-3 w-224">
                    <img src={image1} alt="image 2" />
                    <div className="title flex mt-8 mb-4">
                        <img src={VeryfiedIcon} alt="veryfied icon" />
                        <h4 className="text-primary font-secondary font-bold">Hot News</h4>
                    </div>
                    <div className="text mb-13 font-main text-[13px]">
                        <p>"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.</p>
                        <br />
                        <p>The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.</p>
                        <br />
                        <p>Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series.</p>
                    </div>
                    <div className="meta flex justify-between">
                        <div className="date text-secondary text-sm">25 July</div>
                        <div className="counter text-sm">1/6</div>
                    </div>
                </div>
                <div className="card bg-[#1C1C1C] rounded-[20px] p-3 w-224">
                    <img src={image2} alt="image 3" />
                    <div className="title flex mt-8 mb-4">
                        <img src={VeryfiedIcon} alt="veryfied icon" />
                        <h4 className="text-primary font-secondary font-bold">Hot News</h4>
                    </div>
                    <div className="text mb-13 font-main text-[13px]">
                        <p>"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.</p>
                        <br />
                        <p>The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.</p>
                        <br />
                        <p>Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series.</p>
                    </div>
                    <div className="meta flex justify-between">
                        <div className="date text-secondary text-sm">25 July</div>
                        <div className="counter text-sm">1/6</div>
                    </div>
                </div>
                <div className="card bg-[#1C1C1C] rounded-[20px] p-3 w-224">
                    <img src={image3} alt="image 4" />
                    <div className="title flex mt-8 mb-4">
                        <img src={VeryfiedIcon} alt="veryfied icon" />
                        <h4 className="text-primary font-secondary font-bold">Hot News</h4>
                    </div>
                    <div className="text mb-13 font-main text-[13px]">
                        <p>"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.</p>
                        <br />
                        <p>The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.</p>
                        <br />
                        <p>Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series.</p>
                    </div>
                    <div className="meta flex justify-between">
                        <div className="date text-secondary text-sm">25 July</div>
                        <div className="counter text-sm">1/6</div>
                    </div>
                </div>
                <div className="card bg-[#1C1C1C] rounded-[20px] p-3 w-224">
                    <img src={image4} alt="image 5" />
                    <div className="title flex mt-8 mb-4">
                        <img src={VeryfiedIcon} alt="veryfied icon" />
                        <h4 className="text-primary font-secondary font-bold">Hot News</h4>
                    </div>
                    <div className="text mb-13 font-main text-[13px]">
                        <p>"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.</p>
                        <br />
                        <p>The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.</p>
                        <br />
                        <p>Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series.</p>
                    </div>
                    <div className="meta flex justify-between">
                        <div className="date text-secondary text-sm">25 July</div>
                        <div className="counter text-sm">1/6</div>
                    </div>
                </div>
                <div className="card bg-[#1C1C1C] rounded-[20px] p-3 w-224">
                    <img src={image5} alt="image 6" />
                    <div className="title flex mt-8 mb-4">
                        <img src={VeryfiedIcon} alt="veryfied icon" />
                        <h4 className="text-primary font-secondary font-bold">Hot News</h4>
                    </div>
                    <div className="text mb-13 font-main text-[13px]">
                        <p>"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.</p>
                        <br />
                        <p>The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.</p>
                        <br />
                        <p>Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series.</p>
                    </div>
                    <div className="meta flex justify-between">
                        <div className="date text-secondary text-sm">25 July</div>
                        <div className="counter text-sm">1/6</div>
                    </div>
                </div> */}
            </section>
        </div>
    )
}