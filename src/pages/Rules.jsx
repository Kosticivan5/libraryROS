import { FaCheckCircle } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";

const Rules = () => {
  return (
    <section>
      <div className="warning">
        <CiWarning />
        <p>
          Департамент корпоративного обучения оставляет за собой право <br />{" "}
          принятии решения в предоставлении и аннулировании УЗ пользователя.
        </p>
      </div>
      <div className="rules-container">
        {/* rules */}
        <article>
          <h3 className="rules-title">Как получить и сохранить доступ?</h3>
          <div className="rules">
            <FaCheckCircle />
            <div>
              <h4>С 1-го первого дня работы</h4>
              <p>Возможен доступ в корпоративную библиотеку Росбанка</p>
            </div>
          </div>
          <div className="rules">
            <FaCheckCircle />
            <div>
              <h4>Или живая очередь</h4>
              <p>
                При отсутствии свободных учетных записей в библиотеку сотрудник
                может встать в очередь, написав об этом на
                e-learning@rosbank.ru, и ему выдадут первую освободившуюся.
              </p>
              <p>
                Очередность рассчитывается с момента получения письма
                e-learning@rosbank.ru.
              </p>
            </div>
          </div>
          <div className="rules">
            <FaCheckCircle />
            <div>
              <h4>300 страниц или 5 часов за 30 дней</h4>
              <p>
                Нужно прочитать или прослушать, чтобы сохранить учетную запись в
                библиотеке. Иначе она аннулируется.
              </p>
              <ul>
                <li>Правило действует до 01.04.2024г.</li>
                <li>
                  {" "}
                  Датой начала отчетного периода считается дата регистрации в
                  библиотеке.
                </li>
                <li>
                  {" "}
                  Активность чтения можно отслеживать в своем профиле в
                  приложении MyBook.
                </li>
              </ul>
            </div>
          </div>
        </article>
        {/* rules */}
        <article>
          <h3 className="rules-title">Как вернуть доступ?</h3>
          <div className="rules">
            <FaCheckCircle />
            <div>
              <h4>Через 2 месяца после блокировки</h4>
              <p>
                или позже можно восстановить УЗ после блокировки. Восстановить
                УЗ доступно 2 раза.
              </p>
            </div>
          </div>
        </article>
        {/* rules */}
        <article>
          <h3 className="rules-title">А кто-то будет знать, что я читаю?</h3>
          <div className="rules">
            <FaCheckCircle />
            <div>
              <h4>Администраторы библиотеки</h4>
              <p>
                и ответственные за неё имеют доступ к информации о наименовании
                и авторе книги, которую потребляют пользователи. Эта информация
                может быть использована без упоминания личных данных
                пользователя.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Rules;