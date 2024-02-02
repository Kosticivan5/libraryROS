import img from "../assets/libraryBanner.jpg";
import mybooklogo from "../assets/banner_logo.png";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img className="banner-img" src={img} alt="banner-img" />
        <div className="banner-title-container" title>
          <h1>Библиотека</h1>
          <img src={mybooklogo} alt="mybook" />
        </div>
      </div>
      <div className="banner-info">
        <h2 className="banner-title">
          Добро пожаловать в библиотеку Росбанка!
        </h2>
        <div className="banner-text">
          <h3>
            Здесь можно громко разговаривать&#128522; <br /> Но есть свои
            правила.
          </h3>
          <p>
            При входе в библиотеку обязательно прочтите правила ниже, это
            поможет нам эффективно управлять ограниченным количеством учетных
            записей, а вам поддерживать вашу мотивацию к чтению.
          </p>
        </div>
      </div>
    </>
  );
};
export default Banner;
