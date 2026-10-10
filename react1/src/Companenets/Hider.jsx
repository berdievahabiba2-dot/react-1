import React from 'react'
import ggg from "../img/image2.png"
import img1 from "../img/grop.png"
import img2 from "../img/gro.png"
import img3 from "../img/grop8.png"


import "./Hider.css"
const Hider = () => {
  return (
    <div>
      <div className='aaa'>
        <div className='app'>
            <h3>Скидка 20% на первый заказ</h3>
            <h3 className='pi'>Заказать<img src={img2}/></h3>
        </div>
        <div className='fud'>
          <img className="logo" src={img1} alt="" />
          <img className='logo2' src={img3} alt="" />
          <div className='menu'>
            <p>Подбор рациона</p>
            <p>Программы питания</p>
            <p>О нас</p>
            <p>Доставка</p>
            <p>Акции</p>
            <p>FAQ</p>
            <p>Отзывы</p>
          </div>
          <div className='phone'>
            <p className='pii'>Перезвоните мне</p>
            <h3>+7 988 500-1-700</h3>
          </div>
        </div>

        <div className='pitani'>
          <div>
            <h1 className='ah'>Доставка прогрессивного питания для гурманов</h1>
            <h3 className='sh'>Прогрессивное питание на каждый день</h3>
            <p className="pp">Сбалансированный рацион в  современном формате — Супер-боул</p>
          <div>
            <button className='but'>Подобрать питание</button>
            <button className='but2'>Получить консультацию</button>
          </div>
          </div>
          <img className='fon' src={ggg} alt="" />
        </div>
        </div>
    </div>
  )
}
export default Hider