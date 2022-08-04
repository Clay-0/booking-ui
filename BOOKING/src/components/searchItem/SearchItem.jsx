import './searchItem.css';

const SearchItem = ()=> {
return (
<div className='searchItem'>
<img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/316362524.jpg?k=6368bae71a2a430bb8ce34041f473fe2cc7eb495eb083bcf454c1b08b2f2a33b&o=&hp=1" 
alt="" 
className="siTmg" />
<div className="siDesc">
    <h1 className="siTitle">Tower El-fatih</h1>
    <span className="siDistance">500m from Center</span>
    <span className="siTaxiOp">Free airport taxi</span>
    <span className="siSubtitle">Studio Apartment</span>
    <span className="siFeatures">Entire studio - 1 bathroom - 21m 1 full bed</span>
    <span className="siCancelOp">free cancellation</span>
    <span className="siCancelOpSubtitle">
        you can cancle later, so lock in this great price today!
    </span>
</div>
<div className="siDetails">
    <div className="siRating">
        <span>Excellant</span>
        <button>8.9</button>
    </div>
    <div className="siDetailTexts">
        <span className="siPrice">123$</span>
        <span className="siTaxOp">Include taxes and fees</span>    
        <button className="siCheckBtn">See availability</button>    
    </div>
</div>
</div>
)
}

export default SearchItem