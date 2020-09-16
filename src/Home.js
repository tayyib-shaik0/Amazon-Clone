import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
"
            alt=""  />
            <div className="home__row">
                <Product
                    id="12321341"
                    title="ASUS ROG Zephyrus G14, 14 FHD 120Hz, Ryzen 5 4600HS, GTX 1650Ti 4GB GDDR6 Graphics, Gaming Laptop (8GB/1TB SSD/MS Office 2019/Windows 10/Eclipse Gray/Without Anime Matrix/1.6 Kg), GA401II-HE169TS"
                    price={1299.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81i1XE-J04L._SL1500_.jpg"
                />

                <Product
                id="123456789"
                title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
                price={599.67}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"            
                />
            </div>
            <div className="home__row">
                <Product
                id="121212121"
                title="Amazon Brand - Solimo Microfibre Printed Comforter, Single (Autumn Leaves, 200 GSM)"
                price={259.50}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/91Ie9muSjPL._SL1500_.jpg"            
                 />
           
                 <Product
                id="131313131"
                title="Prestige PCJ 7.0 500-Watt Centrifugal Juicer "
                price={70.45}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/91oCwy3CkdL._SL1500_.jpg"            
                />
                
                <Product
                id="14141414"
                title="Razer Kraken Pro V2 - Oval Ear Cushions - Analog Gaming Headset for PC, Xbox One, Playstation 4, and Nintendo Switch - Green "
                price={160.89}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81qxyapgLEL._SL1500_.jpg"            
                />
            </div>

            <div className="home__row">
                <Product
                id="12321341"
                    title="OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
                price={1499.09}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81kmtB1326L._SL1500_.jpg"            
            />
            </div>


            <div className="home__row">
                <Product
                id="151515151"
                title="Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
                price={19.09}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg"            
            />

            <Product
                id="161616161"
                title="'ASUS ROG Zephyrus S GX701GXR-HG113T' 17.3 FHD 300Hz Gaming Laptop RTX 2080 Max-Q 8GB Graphics (Core i7-9750H 9th Gen/32GB RAM/1TB NVMe SSD/Windows 10/2.60 kg), Black "
                price={3499.09}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81UVS-J9AnL._SL1500_.jpg"            
            />


            <Product
                id="1717171711"
                title="HP OMEN Gaming Business Water Resistant Backpack for 17.3'' Laptops with Self Repairing Dual Concealed Zippers (4YJ80AA)"
                price={199.67}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81sUg7X0BQL._SL1500_.jpg"            
            />
            </div>

            <div className="home__row">
                <Product
                    id="181818181"
                    title="LG 34 inch Curved 21:9 Ultrawide Monitor - WQHD, IPS Panel with, HDMI, Display, USB, Thunderbolt Ports - 34UC98 (Black/Silver) "
                    price={459.89}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/418fPJ7pn3L.jpg"
                />

                <Product
                id="1919191"
                title="FLY2SKY 28pcs Mochi Squishy Toys Mini Squishies Kawaii Animal Squishys Party Favors Easter Egg Fillers Easter Gifts for Kids Unicorn Cat Panda Animal Squeeze Toy Stress Relief Toy Class Prize, Random"
                price={59.67}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41OJa46VMDL._AC_US327_QL65_.jpg"            
                />
            </div>

        </div>
    )
}

export default Home
