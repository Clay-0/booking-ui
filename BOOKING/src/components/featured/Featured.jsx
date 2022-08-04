import "./featured.css"

const Featured = () =>{
    return(
        <div className="featured">
            <div className="featuredItems">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/316362524.jpg?k=6368bae71a2a430bb8ce34041f473fe2cc7eb495eb083bcf454c1b08b2f2a33b&o=&hp=1" alt=""
                 className="featuredImg" />
                 <div className="featuredTitles">
                    <h1>Dubai</h1>
                    <h2>123 properties</h2>
                 </div>
            </div>
            <div className="featuredItems">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/316362524.jpg?k=6368bae71a2a430bb8ce34041f473fe2cc7eb495eb083bcf454c1b08b2f2a33b&o=&hp=1" alt=""
                 className="featuredImg" />
                 <div className="featuredTitles">
                    <h1>Cairo</h1>
                    <h2>456 properties</h2>
                 </div>
            </div>
            <div className="featuredItems">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/316362524.jpg?k=6368bae71a2a430bb8ce34041f473fe2cc7eb495eb083bcf454c1b08b2f2a33b&o=&hp=1" alt=""
                 className="featuredImg" />
                 <div className="featuredTitles">
                    <h1>Khartoum</h1>
                    <h2>789 properties</h2>
                 </div>
            </div>
        </div>
    );
}

export default Featured;