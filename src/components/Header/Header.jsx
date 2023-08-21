import React from 'react'
import './Header.css'
import Burger from './../../images/main_burger.png'
import mulburger from './../../images/burger.png'
import truck from '../../images/food truck.png'
import meat from '../../images/meat.png'
import burger1 from '../../images/burger 1 3.png'
import burger2 from '../../images/burger 10 1.png'
import burger3 from '../../images/burger 12 1.png'
export default function Header() {
  return (
    <>
    <header>
        <div className='yozuv'>
           <button className='b1'>Novoye menyu</button>
           <h1>BURGER CHEDDER</h1>
           <p>Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.</p>
           <button className='b2'>Smotret menyu</button>
        </div>

        <div className='burgerimg'>
        <img src={Burger} alt="" />
        </div>
    </header>


    <div className='section'>
       <div className='H1'>
        <h1>POCHEMU NAS VIBIRAYUT?</h1>
        </div>
        <div className='choosecard'>
            <div className='chcard1'>
               <img src={mulburger} alt="" />
               <h2>Авторские рецепты</h2>
               <p>Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни на какие другие. Мы тщательно отбираем лучшие ингредиенты и сочетания вкусов для нашего меню.</p>
            </div>

            <div className='chcard1'>
               <img src={meat} alt="" />
               <h2>Мраморная говядина</h2>
               <p>Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни на какие другие. Мы тщательно отбираем лучшие ингредиенты и сочетания вкусов для нашего меню.</p>
            </div>

            <div className='chcard1'>
               <img src={truck} alt="" />
               <h2>Быстрая доставка</h2>
               <p>Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни на какие другие. Мы тщательно отбираем лучшие ингредиенты и сочетания вкусов для нашего меню.</p>
            </div>
        </div>
    </div>   

   <section>
    <div className="text1">
        <h1>VIBERITE SVOY BURGER</h1>
    </div>
    <div className="cards">
        <div className="card1">
         <img src={burger1} alt="" />
         <h2>Бургер чеддер & бекон</h2>
         <p>Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус</p>
         <div className="narx">
            <div>
                <h2>8 $</h2>
                <p>360 гр</p>
            </div>
            <div>
                <button>Заказать</button>
            </div>
         </div>
        </div>

        <div className="card1">
         <img src={burger2} alt="" />
         <h2>Бургер чеддер & бекон</h2>
         <p>Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус</p>
         <div className="narx">
            <div>
                <h2>8 $</h2>
                <p>360 гр</p>
            </div>
            <div>
                <button>Заказать</button>
            </div>
         </div>
        </div>

        <div className="card1">
         <img src={burger3} alt="" />
         <h2>Бургер чеддер & бекон</h2>
         <p>Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус</p>
         <div className="narx">
            <div>
                <h2>8 $</h2>
                <p>360 гр</p>
            </div>
            <div>
                <button>Заказать</button>
            </div>
         </div>
        </div>

        <div className="card1">
         <img src={burger1} alt="" />
         <h2>Бургер чеддер & бекон</h2>
         <p>Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус</p>
         <div className="narx">
            <div>
                <h2>8 $</h2>
                <p>360 гр</p>
            </div>
            <div>
                <button>Заказать</button>
            </div>
         </div>
        </div>

        <div className="card1">
         <img src={burger2} alt="" />
         <h2>Бургер чеддер & бекон</h2>
         <p>Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус</p>
         <div className="narx">
            <div>
                <h2>8 $</h2>
                <p>360 гр</p>
            </div>
            <div>
                <button>Заказать</button>
            </div>
         </div>
        </div>

        <div className="card1">
         <img src={burger3} alt="" />
         <h2>Бургер чеддер & бекон</h2>
         <p>Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус</p>
         <div className="narx">
            <div>
                <h2>8 $</h2>
                <p>360 гр</p>
            </div>
            <div>
                <button>Заказать</button>
            </div>
         </div>
        </div>

    </div>
   </section>
    </>
  )
}
