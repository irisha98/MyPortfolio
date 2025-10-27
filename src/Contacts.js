import { FaGithub, FaEnvelope, FaTelegram } from "react-icons/fa";

function Contacts() {
  return (
    <div className="contacts">
      <a
        href="https://github.com/irisha98"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
     

      <a
        href="https://e.mail.ru/compose/?to=irisha.dorzheeva@mail.ru"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mail.ru"
      >
        <FaEnvelope />
      </a>

      <a 
        href="https://t.me/irinad3001" 
        aria-label="Telegram" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaTelegram />
      </a>
    </div>
  );
}

export default Contacts;
