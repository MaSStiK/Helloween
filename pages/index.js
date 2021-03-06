import Image from 'next/image'
import Menu from '../components/menu'
import home1 from '../images/home1-img.png'
import home2 from '../images/home2-img.png'
import home3 from '../images/home3-img.png'

export default function Index() {
    function slider1 () {
        document.getElementsByClassName("block__image")[0].style.display = "block"
        document.getElementsByClassName("block__info")[0].style.display = "block"
        document.getElementsByClassName("block__image2")[0].style.display = "none"
        document.getElementsByClassName("block__info2")[0].style.display = "none"
        document.getElementsByClassName("block__image3")[0].style.display = "none"
        document.getElementsByClassName("block__info3")[0].style.display = "none"
    }

    function slider2 () {
        document.getElementsByClassName("block__image")[0].style.display = "none"
        document.getElementsByClassName("block__info")[0].style.display = "none"
        document.getElementsByClassName("block__image2")[0].style.display = "block"
        document.getElementsByClassName("block__info2")[0].style.display = "block"
        document.getElementsByClassName("block__image3")[0].style.display = "none"
        document.getElementsByClassName("block__info3")[0].style.display = "none"
    }

    function slider3 () {
      document.getElementsByClassName("block__image")[0].style.display = "none"
      document.getElementsByClassName("block__info")[0].style.display = "none"
      document.getElementsByClassName("block__image2")[0].style.display = "none"
      document.getElementsByClassName("block__info2")[0].style.display = "none"
      document.getElementsByClassName("block__image3")[0].style.display = "block"
      document.getElementsByClassName("block__info3")[0].style.display = "block"
  }
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          <div className="site__slider">
            <div className="slider__list">
              <div className="slider__block">
                <div className="block__image">
                  <Image
                    src={home1}
                    width="460px"
                    height="500px"
                  />
                </div>
                <div className="block__info">
                  <h1 class="info__title">
                    UOOOO
                    <br />
                    TRICK OR
                    <br />
                    TREAT!!
                  </h1>
                  <p class="info__description">
                    Hi, I'm Reiza, people call me "El Labu". I am currently trying
                    to learn something new, building my own bike with parts made
                    only in Malaysia.
                  </p>
                </div>

                <div className="block__info2">
                  <h1 class="info__title">
                    UOOOO
                    <br />
                    TRICK OR
                    <br />
                    TREAT!!
                  </h1>
                  <p class="info__description">
                    Hi, I'm Reiza, people call me "El Labu". I am currently trying
                    to learn something new, building my own bike with parts made
                    only in Malaysia.
                  </p>
                </div>
                <div className="block__image2">
                  <Image
                    src={home2}
                    width="460px"
                    height="500px"
                  />
                </div>

                <div className="block__image3">
                  <Image
                    src={home3}
                    width="460px"
                    height="500px"
                  />
                </div>
                <div className="block__info3">
                  <h1 class="info__title">
                    UOOOO
                    <br />
                    TRICK OR
                    <br />
                    TREAT!!
                  </h1>
                  <p class="info__description">
                    Hi, I'm Reiza, people call me "El Labu". I am currently trying
                    to learn something new, building my own bike with parts made
                    only in Malaysia.
                  </p>
                </div>
                
              </div>
            </div>
            <div className="slider__menu">
              <div className="menu__mark" onClick={slider1}></div>
              <div className="menu__mark" onClick={slider2}></div>
              <div className="menu__mark" onClick={slider3}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
