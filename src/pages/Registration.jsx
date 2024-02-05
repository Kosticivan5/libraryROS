import { GiArchiveRegister } from "react-icons/gi";
import qr from "../assets/qr_registration.svg";

const Registration = () => {
  return (
    <section>
      <div className="registration">
        <GiArchiveRegister />
        <p>
          Регистрацию в корпоративной библиотеке необходимо проходить на личном
          или корпоративном компьютере (после регистрации можно будет читать на
          любом устройстве).
        </p>

        <GiArchiveRegister />
        <p>
          Чтобы зарегистироваться, надо перейти по{" "}
          <a href="https://rosbank.mybook.ru/account/landing/" target="_blank">
            ссылке
          </a>{" "}
          и указать свой корпоративный электронный адрес.
        </p>

        <GiArchiveRegister />
        <p>
          Самостоятельно зарегистрироваться могут все сотрудники Росбанка, у
          кого есть корпоративная почта с доменом rosbank.ru или usccards.ru. В
          других случаях необходимо обратится на{" "}
          <a href="mailto: e-learning@rosbank.ru" target="_blank">
            e-learning@rosbank.ru
          </a>{" "}
          , и коллеги запросят регистрацию у провайдера.
        </p>

        <GiArchiveRegister />
        <p>
          После успешной регистрации пароль и ссылка на библиотеку приходят на
          корпоративную почту сотрудника.
        </p>
        <GiArchiveRegister />
        <p>
          Как только появилась своя учетная запись в библиотеке, можно читать
          или слушать книги на любом устройстве, скачав приложение через Google
          Play / AppStore. QR-коды для скачивания:
        </p>
      </div>
      <img className="qr-code" src={qr} alt="qr_registration" />
    </section>
  );
};
export default Registration;
