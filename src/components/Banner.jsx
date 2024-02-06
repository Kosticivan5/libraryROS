import img from "../assets/libraryBanner.jpg";
import mybooklogo from "../assets/banner_logo.png";
import qr_android from "../assets/qr_android.svg";
import qr_iOS from "../assets/qr_iOS.svg";

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
      {/* main info */}
      <article className="banner-info">
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
        {/* quick nav */}
        <div className="quick-nav">
          <article className="read-nav">
            <p>Приходите в библиотеку через вэбверсию</p>
            <a href="https://rosbank.mybook.ru/" target="_blank">
              Хочу уже читать!
            </a>
          </article>
          <article className="download-nav">
            <p>Или через приложение, предварительно скачав его по QR-коду:</p>
            <div className="qr-container">
              <p>Android</p>
              <p>iOS</p>
              <img src={qr_android} alt="android" className="qr android" />
              <img src={qr_iOS} alt="iOS" className="qr iOS" />
            </div>
          </article>
        </div>
      </article>
    </>
  );
};
export default Banner;
