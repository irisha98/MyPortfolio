
import Contacts from "./Contacts";


function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__header">
          <img src="/photo.png" width={150} alt="icon"/>
          <h1 className="sidebar-name">Irina Dorzheeva</h1>
          <h3 className="sidebar__title">Full-stack разработчик: React / Redux / Node.js. Создаю функциональные веб-приложения и аккуратные интерфейсы, когда это нужно.</h3>
        </div>

        <br></br>
        <br></br>

        <ul className="sidebar__menu">
          <li>
            <a href="#about" className="sidebar__link">
              <span className="sidebar__line"></span> Обо мне
            </a>
          </li>
          <li>
            <a href="#projects" className="sidebar__link">
              <span className="sidebar__line"></span> Проекты
            </a>
          </li>
            <li>
            <a href="#certificates" className="sidebar__link">
              <span className="sidebar__line"></span> Сертификаты
            </a>
          </li>
        </ul>
      </div>
 
      <br></br>
      <br></br>
      <div className="sidebar__footer">
        <Contacts />
      </div>
    </nav>
  );
}

export default Sidebar;


