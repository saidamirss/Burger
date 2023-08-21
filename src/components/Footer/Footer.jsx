import React from 'react'
import './Footer.css'
import delivery from '../../images/food-delivery.png'
import Logo from '../../images/Logo.png'

export default function Footer() {
  return (
    <>
      <footer>
        <div className='text2'>
        <h1>OFORMLENIYE ZAKAZA</h1>
        </div>
        <div className="regis">
            <div>
                <img src={delivery} alt="" />
            </div>

            <div className='zakazbox'>
               <h3>Заполните все данные и наш менеджер свяжется с вами для подтверждения заказа</h3>
               <input type="text" />
               <input type="text" />
               <input type="text" />
               <button>Оформить заказ</button>

            </div>
        </div>
      </footer>
      <footer className='footer2'>
        <div>
            <img src={Logo} alt="" />
         </div>

        <div>
            <p>Все права защищены</p>
        </div>
      </footer>
    </>
  )
}
