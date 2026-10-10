import React from 'react'
import img from "../img/group.svg"
import img4 from "../img/Frame.svg"

import "./Menu.css"

const Menu = () => {
  return (
    <div>
        <div className='eda'>
            <div>
            <img src={img}/>
            </div>
            <div>
                <h1>Еда, которая сделает тебя лучше!</h1>
                <p>Мы помогаем создавать новое качество жизни для наших клиентов, чтоб каждый человек был счастливым, здоровым и не отвлекался на рутинные процессы.</p><br />
                <p>Для этого мы создали новый уникальный продукт на рынке доставки еды и приглашаем вас окунуться в гастрономический шик уже сегодня.</p>
            </div>
        </div>

        <div className='eda'>
            <div>
                <h1>Изысканное меню высокой кухни</h1>
                <p>В наших блюдах мы продумали каждую деталь, все ингредиенты тщательно подобраны и создают неповторимый вкус.</p><br />
                <p>Качественные продукты, деликатесы и суперфуды, которые помогают  поддерживать здоровье и обмен веществ. Мы используем крафтовые ингредиенты: с любовью выращиваем микрозелень, делаем соусы и масла, маринуем мясо, рыбу и морепродукты.</p>
            </div>
            <div>
                <img src={img4} />
            </div>
        </div>

        <div className='sel'>
            <div className='seli'>
            <div>
                <h1>Подберите рацион для своих целей</h1>
                <div className="buttons">
                    <button>Ж M</button>
                    <button>Ваш вес</button>
                    <button>Ваш рост</button>
                    <button>Ваш возраст</button>
                    <button>Активность </button>
                    <button>Выберите цель</button>
                    <button className='last'>Рассчитать рацион</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Menu
