import { useEffect, useState } from "react";
import SearchIcon from "../../assets/SearchIcon.svg";
import '../Home/Home.css'
import galaryIcon from '../../assets/galleryIcon.svg'
import videoIcon from '../../assets/videoIcon.svg'
import axios from "axios";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {

  const [searchKey, setSearchKey] = useState('')
  const [image, setImage] = useState([])
  const [showImage, setShowImage] = useState('')

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3
  }

  const handleSearch = () => {
    console.log(searchKey)
  }

  const getSwapEvent = async () => {
    try {
      let respone = await axios.get('https://metatechvn.store/lovehistory/page/1?id_user=0')
      if (respone) {
        setImage(respone.data?.list_sukien[5].sukien)
        console.log("respose:", respone)
      }
      else {
        console.log("no response")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSwapEvent()
  }, [])


  return (
    <div className="home-container">
      <div className="searchBar">
        <img src={SearchIcon} className="imgSearch" onClick={() => handleSearch()} />
        <div className="search">
          <input type="text" value={searchKey} onChange={(event) => setSearchKey(event.target.value)} />
        </div>
      </div>

      <div className="custome">
        <div className="images">
          <img src={galaryIcon} />
          <button>Images</button>
        </div>
        <div className="videos">
          <img src={videoIcon} />
          <button>Videos</button>
        </div>
      </div>
      <div className="image-swap">
        <div className="title">
          <span className="sp1">Images</span>
          <span className="sp2">Swap Image</span>
        </div>
        <div>
          <div className="swap-event">
            {image.map((item, index) => {
              console.log(item.link_nam_goc)
              return (
                <div key={index} className="">
                  <img src={item.link_nam_goc} style={{ width: "200px" }} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
