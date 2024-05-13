
const Footer = () => {
  return (
    <div className="mb-10 text-gray-500">
      <nav>
        <ul className="flex items-center justify-between text-[12px] mx-auto w-[80%]">
          <li>
            <a href="#">Meta</a>
          </li>
          <li>
            <a href="#">Информация</a>
          </li>
          <li>
            <a href="#">Блог</a>
          </li>
          <li>
            <a href="#">Вакансии</a>
          </li>
          <li>
            <a href="#">Помощь</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Конфиденциальность</a>
          </li>
          <li>
            <a href="#">Условия</a>
          </li>
          <li>
            <a href="#">Места</a>
          </li>
          <li>
            <a href="#">Instagram Lite</a>
          </li>
          <li>
            <a href="#">Threads</a>
          </li>
          <li>
            <a href="#">
              Загрузка контактов и лица, не являющиеся пользователями
            </a>
          </li>
          <li>
            <a href="#">Meta Verified</a>
          </li>
        </ul>
      </nav>
      <div className="flex text-[12px] items-center justify-center mt-10">
        <select className="mx-10">
          <option value="Русский">Русский</option>
          <option value="O'zbek">O`zbek</option>
          <option value="English">English</option>
        </select>
        <h1>© 2024 Instagram from Meta</h1>
      </div>
    </div>
  );
};

export default Footer;
