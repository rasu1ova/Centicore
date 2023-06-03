import { useState, useEffect } from "react";
import { Data, System } from "..";
import { AiOutlineClose } from "react-icons/ai";
import { Slider } from "antd";

function Calculate() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectService, setSelectService] = useState(null);
  const [selectModule, setSelectModule] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function handleCheckboxChange(value, checked) {
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
      console.log(checked);
    }
  }
  function handleModule(event, checked) {
    const value = event;
    console.log(event);
    console.log(checked);
    if (checked) {
      setSelectModule([...selectModule, value]);
      console.log(value);
    } else {
      setSelectModule(selectModule.filter((val) => val !== value));
      // console.log(checked);
    }
    console.log(checked);
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
                    name="module2"
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
                    name="module2"
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
                    name="module2"
                    value="Интеграция существующих модулей 1С"
                    id="module3"
                    defaultChecked={
                      selectModule === "Интеграция существующих модулей 1С"
                    }
                    onClick={(e) => {
                      handleModule(e.target.value, e.target.checked);
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
              <div className="calc--box">
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
          <h2 className="total--heading">Итог</h2>

          <div className="result">
            <p className="result--title">Service: </p>
            {selectService && (
              <div className="radio">
                <span>service: {selectService} dd </span>
                <button className="none" onClick={unChecked}>
                  <AiOutlineClose />
                </button>
              </div>
            )}
            <p className="result--title">Длительность проекта: </p>
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
            <p className="result--title">Module: </p>
            {selectModule.map((item, index) => {
              return (
                <span key={index} className="radio">
                  {item}
                  <button className="none" onClick={() => {}}>
                    <AiOutlineClose />
                  </button>
                </span>
              );
            })}
            <p className="result--title">Products: </p>
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
        </div>
      </div>
    </div>
  );
}

export default Calculate;
