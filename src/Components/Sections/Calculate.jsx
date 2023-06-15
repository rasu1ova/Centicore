import { useState } from "react";
import { Data, System } from "..";
import { AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Slider } from "antd";
import Button from "../Form/Button";
import { Sponsor1, Sponsor2, Sponsor3, Sponsor4 } from "../../assets";
// import { useEffect } from "react";

function Calculate() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectService, setSelectService] = useState(null);
  const [selectModule, setSelectModule] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);
  const [fname, setFname] = useState("");
  const [call, setCall] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  // const [send, setSend] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [mistake, setMistake] = useState(false);

  function handleCheckboxChange(value, checked) {
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
  }
  function handleModule(event, checked, id) {
    const value = event;
    const isChecked = checked;
    const checkId = id;

    
    const data = {
      id: checkId,
      val: value,
      check: isChecked,
    };
    if (checked) {
      setSelectModule([...selectModule, value]);
    } else {
      setSelectModule(selectModule.filter((val) => val !== value));
    }
  }
  function handleService(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectService(value);
    }
  }
  const unChecked = () => {
    setSelectService(null);
  };

  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  function handleCheckedBack(index) {
    return () => {
      setSelectModule((prevModules) => {
        const updatedModules = [...prevModules];
        updatedModules[index] = false;
        return updatedModules;
      });
    };
  }
  const marks = {
    1: " ",
    2: " ",
    3: "3 месяца",
    4: " ",
    5: " ",
    6: "6 месяцев",
    7: " ",
    8: " ",
    9: "9 месяцев",
    10: " ",
    11: " ",
    12: " ",
    13: " ",
    14: " ",
    15: " ",
    16: " ",
    17: " ",
    18: "1,5 год",
    19: " ",
    20: " ",
    21: " ",
    22: " ",
    23: " ",
    24: {
      style: {
        color: "#f50",
      },
      label: <strong>2 года</strong>,
    },
  };

  function handleSubmit() {
    if (
      fname !== "" &&
      companyName != "" &&
      call > 0 &&
      message != "" &&
      email != ""
    ) {
      setCorrect(true);
    } else {
      setMistake(true);
    }
    setFname("");
    setCompanyName("");
    setCall("");
    setMessage("");
    setEmail("");
  }

  return (
    <div className="centicore">
      <div className="row container ">
        <div className="calculate">
          <h2 className="calc--heading">Посчитать стоимость</h2>
          <p>
            Для наилучшей обработки вашего запроса, пожалуйста, выберите
            необходимые параметры.
          </p>
          <div className="calc__main">
            <div className="calc--part">
              <h3 className="calc--title">1. Выберете услугу</h3>
              <div className="calc--box">
                <label htmlFor="service1" className="service">
                  <input
                    type="radio"
                    value="Аутстаффинг 1С специалистов"
                    id="service1"
                    name="service"
                    onChange={handleService}
                    checked={selectService === "Аутстаффинг 1С специалистов"}
                  />
                  <span>Аутстаффинг 1С специалистов</span>
                </label>
                <label htmlFor="service2" className="service">
                  <input
                    type="radio"
                    name="service"
                    onChange={handleService}
                    value="Разработка 1С модулей"
                    id="service2"
                    checked={selectService == "Разработка 1С модулей"}
                  />
                  <span>Разработка 1С модулей</span>
                </label>
                <label htmlFor="service3" className="service">
                  <input
                    type="radio"
                    name="service"
                    value="Внедрение решений 1С в предприятие"
                    id="service3"
                    onChange={handleService}
                    checked={
                      selectService == "Внедрение решений 1С в предприятие"
                    }
                  />
                  <span>Внедрение решений 1С в предприятие</span>
                </label>
              </div>
            </div>
            <div className="calc--part">
              <h3 className="calc--title">2. Спецификация модуля</h3>
              <div className="calc--box">
                <label htmlFor="module1" className="checking">
                  <input
                    type="checkbox"
                    value="Разработка нового модуля 1С"
                    id="module1"
                    name="module"
                    defaultChecked={
                      selectModule === "Разработка нового модуля 1С"
                    }
                    onClick={(e) =>
                      handleModule(e.target.value, e.target.checked, e.id)
                    }
                  />
                  <span>Разработка нового модуля 1С</span>
                </label>
                <label htmlFor="module2" className="checking">
                  <input
                    type="checkbox"
                    name="module"
                    value="Доработка модуля 1С"
                    id="module2"
                    defaultChecked={setSelectModule === "Доработка модуля 1С"}
                    onClick={(e) =>
                      handleModule(e.target.value, e.target.checked, e.id)
                    }
                  />
                  <span>Доработка модуля 1С</span>
                </label>
                <label htmlFor="module3" className="checking">
                  <input
                    type="checkbox"
                    name="module"
                    value="Интеграция существующих модулей 1С"
                    id="module3"
                    defaultChecked={
                      selectModule === "Интеграция существующих модулей 1С"
                    }
                    onClick={(e) => {
                      handleModule(e.target.value, e.target.checked, e.index);
                    }}
                  />
                  <span>Интеграция существующих модулей 1С</span>
                </label>
              </div>
            </div>
            <div className="calc--part">
              <h3 className="calc--title">
                3. Продукты в системе 1С:Предприятие
              </h3>
              <div className="calc--box ">
                {Data.map((item) => {
                  return (
                    <System
                      key={item.id}
                      id={item.id}
                      elem={item}
                      checkDesc={item.describe}
                      checked={selectedValues.includes(item.describe)}
                      onClicks={(e) =>
                        handleCheckboxChange(
                          item.describe,
                          e.target.checked,
                          item.id
                        )
                      }
                    />
                  );
                })}
              </div>
            </div>
            <div className="calc--part">
              <h3 className="calc--title">4. Длительность проекта</h3>
              <div className="calc--range">
                <Slider
                  className="range"
                  onChange={onChange}
                  value={marks.value}
                  marks={marks}
                  defaultValue={18}
                  min={1}
                  max={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="total">
          <div className="total__info">
            <h2 className="total--heading">Итог</h2>

            <div className="result">
              <p className="result--title">
                {selectService ? "Выберете услугу:" : ""}
              </p>
              <div className="result--item">
                {selectService && (
                  <div className="radio">
                    <span>{selectService}</span>
                    <button className="none" onClick={unChecked}>
                      <AiOutlineClose />
                    </button>
                  </div>
                )}
              </div>

              <p className="result--title">
                {selectModule.length > 0 ? "Спецификация модуля:" : ""}{" "}
              </p>
              <div className="result--item">
                {selectModule.map((item, index) => {
                  return (
                    <span key={index} className="radio">
                      {item}
                      <button
                        className="none"
                        onClick={handleCheckedBack(index, item.checked)}>
                        <AiOutlineClose />
                      </button>
                    </span>
                  );
                })}
              </div>
              <p className="result--title">
                {selectedValues.length > 0
                  ? "Продукты в системе 1С:Предприятие:"
                  : ""}{" "}
              </p>
              <div className="result--item">
                {selectedValues.map((item, index) => {
                  return (
                    <span key={index} className="radio">
                      {item}
                      <button className="none" onClick={() => {}}>
                        <AiOutlineClose />
                      </button>
                    </span>
                  );
                })}
              </div>
              <p className="result--title">
                {inputValue ? "Длительность проекта:" : ""}{" "}
              </p>
              <div className="result--item">
                {inputValue && (
                  <div className="radio">
                    <span className="">Длительность {inputValue} месяцев</span>
                    <button
                      className="none"
                      onClick={() => {
                        setInputValue(null);
                      }}>
                      <AiOutlineClose />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="total__btn">
            <Button
              name="ПОЛУЧИТЬ СТОИМОСТЬ"
              onClick={() => {
                setActive(true);
              }}
            />
          </div>
        </div>
        {active && (
          <div className="popup">
            <div className="popup-content">
              <div className="close">
                <button
                  onClick={() => {
                    setActive(false);
                  }}>
                  X
                </button>        
              </div>
              <div className="module row">
                <div className="form">
                  <h2 className="calc--heading">Посчитать стоимость</h2>
                  <p>
                    Заполните форму внизу, чтобы запланировать бесплатную
                    консультацию с целью понять, как Centicore Group может
                    помочь Вашему бизнесу вырасти.
                  </p>
                  <div className="form--content">
                    <div className="labIn">
                      <label htmlFor="fname" className="label">
                        <input
                          type="text"
                          name="fname"
                          onChange={(e) => setFname(e.target.value)}
                          value={fname}
                          id=""
                          placeholder="Имя и фамилия"
                        />
                      </label>
                      <label htmlFor="email" className="label primary--label">
                        <span className="primary">Email</span>
                        <input
                          type="text"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          name="email"
                          id=""
                          placeholder="example@gmail.com"
                        />
                      </label>
                    </div>
                    <div className="labIn">
                      <label htmlFor="call" className="label">
                        <input
                          type="number"
                          onChange={(e) => setCall(e.target.value)}
                          value={call}
                          name="call"
                          id=""
                          placeholder="Телефон"
                        />
                      </label>
                      <label
                        htmlFor="companyName"
                        className="label primary--label">
                        <span className="primary">Название компании</span>
                        <input
                          type="text"
                          onChange={(e) => setCompanyName(e.target.value)}
                          value={companyName}
                          name="companyName"
                          id=""
                          placeholder="Название"
                        />
                      </label>
                    </div>
                    <label htmlFor="message" className="label">
                      <input
                        type="text"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        name="message"
                        id=""
                        placeholder="Сообщение"
                      />
                    </label>
                    <div className="checkbox--label">
                      <label htmlFor="checkbox" className="checking">
                        <input
                          className="checking"
                          type="checkbox"
                          name=""
                          id="checkbox"
                        />
                        <span>
                          Я согласен(а) с{" "}
                          <span className="primary">Политикой</span> обработки
                          персональных данных.
                        </span>
                      </label>
                    </div>
                    <div className="form__btn">
                      <Button name="Отправить" onClick={handleSubmit} />
                    </div>
                  </div>
                </div>
                <div className="happen">
                  <h2 className="happen--heading"> Что происходит дальше?</h2>
                  <ul className="happen__suite">
                    <li>
                      <span className="number">1</span>Менеджер связывается с
                      Вами
                    </li>
                    <li>
                      <span className="number">2</span>Подписываем NDA при
                      необходимости
                    </li>
                    <li>
                      <span className="number">3</span>Наш архитектор и бизнес
                      аналитики разрабатывают архитектуру проекта
                    </li>
                    <li>
                      <span className="number">4</span>Подписываем договор
                    </li>
                    <li>
                      <span className="number">5</span>Выполняем работы
                    </li>
                    <li>
                      <span className="number">6</span>Вы получаете
                      гарантированный результат
                    </li>
                  </ul>
                  <hr className="hr--line" />
                  <h2 className="happen--heading">Нам доверяют</h2>
                  <ul className="sponsor">
                    <li>
                      <img src={Sponsor1} alt="" />
                    </li>
                    <li>
                      <img src={Sponsor2} alt="" />
                    </li>
                    <li>
                      <img src={Sponsor3} alt="" />
                    </li>
                    <li>
                      <img src={Sponsor4} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {correct && (
          <div className="send">
            <div className="send-content">
              <h3>Ваше сообщение отправлено!</h3>
              <p className="send--title">
                Большое спасибо за проявленный интерес. Ожидайте наших новостей.
              </p>
              <div className="correct">
                <Button
                  name="Хорошо"
                  onClick={() => {
                    setCorrect(false);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {mistake && (
          <div className="send">
            <div className="send-content">
              <h3>Произошла ошибка!</h3>
              <p className="send--title">
                Большое спасибо за проявленный интерес. Ожидайте наших новостей.
              </p>
              <div className="mistake">
                <Button
                  name="Попробовать снова"
                  onClick={() => {
                    setMistake(false);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculate;
