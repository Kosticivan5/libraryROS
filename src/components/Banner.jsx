import img from "../assets/libraryBanner.jpg";
import logo from "../assets/logo.svg";
import mybooklogo from "../assets/mybooklogo.svg";

const Banner = () => {
  return (
    <>
      <div className="banner">
        {/* <img className="logo" src={logo} alt="logo" /> */}
        <img className="banner-img" src={img} alt="banner-img" />
        <h1>Библиотека</h1>
      </div>
      <div className="banner-info">
        <h2 className="banner-title">
          Добро пожаловать на страницу корпоративной библиотеки <span>Рос</span>
          банка от <br /> <img src={mybooklogo} alt="mybook" />
        </h2>
        <div className="banner-text">
          <p>
            Здесь можно громко разговаривать :-) но есть свои правила. При входе
            в библиотеку обязательно прочтите их{" "}
            <span>(см.первый инфоблок ниже)</span>, это поможет нам эффективно
            управлять ограниченным количеством учетных записей, а вам
            поддерживать вашу мотивацию к чтению.
          </p>
          <p>
            Если вы не найдете на этой странице ответ на свой вопрос, приходите
            на ящик <br />
            <a href="mailto: e-learning@rosbank.ru" target="_blank">
              e-learning@rosbank.ru
            </a>{" "}
            вам помогут!
          </p>
        </div>
      </div>
    </>
  );
};
export default Banner;
