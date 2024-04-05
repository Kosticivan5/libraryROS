import { FaCheckCircle } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";

const Rules = () => {
  return (
    <section>
      <div className="rules-container">
        {/* rules */}
        <article>
          <h3 className="rules-title">Как получить и сохранить доступ?</h3>
          <div className="rules">
            <FaCheckCircle />
            <div>
              <h4>С 1-го первого дня работы</h4>
              <p>возможен доступ в корпоративную библиотеку Росбанка</p>
            </div>
          </div>
          <div className="rules">
            <FaCheckCircle />
            <div>
              <h4>Или живая очередь</h4>
              <p>
                При отсутствии свободных учетных записей в библиотеку сотрудник
                может встать в очередь, написав об этом на{" "}
                <a href="mailto:e-learning@rosbank.ru">e-learning@rosbank.ru</a>
                , и ему выдадут первую освободившуюся.
              </p>
              <p>
                Очередность рассчитывается с момента получения письма{" "}
                <a href="mailto:e-learning@rosbank.ru">e-learning@rosbank.ru</a>
              </p>
            </div>
          </div>
          <div className="rules">
            <FaCheckCircle />
            <div>
              <h4>200 страниц или 200 минут за 30 дней</h4>
              <p>
                Нужно прочитать или прослушать, чтобы сохранить учетную запись в
                библиотеке. Иначе она блокируется. Правило действует с 1 апреля
                2024 года.
              </p>
              <ul>
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
                или позже можно восстановить УЗ. Для этого снова
                зарегистрируйтесь в библиотеке MyBook по{" "}
                <a
                  href="https://rosbank.mybook.ru/account/landing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ссылке
                </a>{" "}
                или напишите на{" "}
                <a href="mailto:e-learning@rosbank.ru">e-learning@rosbank.ru</a>
                . Если возможность и желание читать у вас появятся раньше, чем
                через 2 месяца, вы можете встать в лист ожидания, также написав
                на{" "}
                <a href="mailto:e-learning@rosbank.ru">e-learning@rosbank.ru</a>
                .
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
      <div className="warning">
        <CiWarning />
        <p>
          Департамент корпоративного обучения оставляет за собой право <br />{" "}
          принимать решение о предоставлении или аннулировании УЗ пользователя.
        </p>
      </div>
    </section>
  );
};
export default Rules;
