import React from 'react'
import "./Min.css"

import img from "../img/gri.png"
import img1 from "../img/im.png"
import img2 from "../img/im1.png"
import img3 from "../img/im3.png"
import img4 from "../img/im4.png"
import img5 from "../img/Gr2.png"

const Min = () => {
  return (
    <div className="min">
      <div className="min-header">
        <h1>Программа ПремиумБоул</h1>
        <p><img src={img} alt="" />Каждый день новое меню</p>
      </div>

      <p className="label">Калорийность</p>

      <div className="options">
        <button >900 ккал <small>3 блюда</small></button>
        <button className="active">1 250 ккал <small>4 блюда</small></button>
        <button >1 600 ккал <small>5 блюд</small></button>
        <button className='nn'>2 050 ккал <small>6 блюд</small></button>
        <button className='nn'>Индивидуально <small>подобрать</small></button>
      </div>

      <p className="label">Продолжительность</p>

      <div className="options">
        <button>Пробные 2 дня <small>за 2 900 ₽</small></button>
        <button>1 неделя <small>1 700 ₽ в день</small></button>
        <button className="active">2 недели <small>1 600 ₽ в день</small></button>
        <button className='nn'>3 недели <small>1 520 ₽ в день</small></button>
        <button className='nn'>4 недели <small>1 450 ₽ в день</small></button>
      </div>

      <div className="count">
        <p>Выберите, сколько дней<br />в неделю вы хотите питаться</p>
        <div>
          <button className="active">6</button>
          <button>7</button>
          <button>8</button>
        </div>
      </div>
      <p className="label">Пример дневного рациона</p>
      <p className="nutrition">6 блюд. Калорийность — 1 235 ккал. Белки — 103 г;жиры — 37 г; углеводы — 120 г.</p>
      <div className="days">
        <button>понедельник</button>
        <button>вторник</button>
        <button className='nn'>четверг</button>
        <button className="active">пятница</button>
        <button className='nn'>суббота</button>
        <button className='nn'>воскресенье</button>
      </div>

      <div className="food">
        <div className="food-card">
          <img src={img1} alt="" />
          <p className="food-time">Завтрак · 230/250 гр</p>
          <p>Утренний боул с перепелиным яйцом, киноа и лососем</p>
        </div>

        <div className="food-card">
          <img src={img2} alt="" />
          <p className="food-time">Обед · 320/30 гр</p>
          <p>Боул с куриными фрикадельками в кунжуте, брокколи и миндальным соусом</p>
        </div>

        <div className="food-card">
          <img src={img3} alt="" />
          <p className="food-time">Полдник · 50/30 гр</p>
          <p>Кукурузные блинчики с кокосовым припеком и фруктовым тар-таром</p>
        </div>

        <div className="food-card">
          <img src={img4} alt="" />
          <p className="food-time">Ужин · 100/100 гр</p>
          <p>Морепродукты в соусе Гарсия со стручковой фасолью</p>
        </div>
      </div>

      <div className="bottom">
        <div className="order">
          <button>Заказать 10 дней питания за 16 000 ₽</button>
          <p>1 250 ккал за 1 600 ₽ в день</p>
        </div>
        <img className="delivery-img" src={img5} alt="" />
        <div className="delivery-text">
          <h3>Будем доставлять наборы каждый день.</h3>
          <p>Доставка осуществляется каждый день с 06:00 до 12:00.Выбор интервала — 2 часа.</p>
          <p>Заявки принимаются не позднее, чем за деньдо предполагаемой доставки.</p>
        </div>
      </div>

    </div>
  )
}

export default Min
