import React from "react";
import { Service, System } from "..";
import Data from "../Data/data";

function Calculate() {
  return (
    <div>
      <div className="calculate">
        <h2>Посчитать стоимость</h2>
        <p>
          Для наилучшей обработки вашего запроса, пожалуйста, выберите
          необходимые параметры.
        </p>
        <div className="calc__main">
        <div className="calc--part">
          <h3>1. Выберете услугу</h3>
          <div className="calc--box">
            <Service
              radioName="radio1"
              radioValue="Аутстаффинг 1С специалистов"
              id={1}
            />
            <Service
              radioName="radio1"
              radioValue="Разработка 1С модулей"
              id={2}
            />
            <Service
              radioName="radio1"
              radioValue="Внедрение решений 1С в предприятие"
              id={3}
            />
          </div>
        </div>
        <div className="calc--part">
          <h3>2. Спецификация модуля</h3>
          <div className="calc--box">
            <Service
              radioName="radio1"
              radioValue="Аутстаффинг 1С специалистов"
              id={1}
            />
            <Service
              radioName="radio1"
              radioValue="Разработка 1С модулей"
              id={2}
            />
            <Service
              radioName="radio1"
              radioValue="Внедрение решений 1С в предприятие"
              id={3}
            />
          </div>
        </div>
        <div className="calc--part">
          <h3>3. Продукты в системе 1С:Предприятие</h3>
          <div className="calc--box">
            {Data.map((item) => {
                return(
                    <System key={item.id} checked={item.checked} />
                )
            })}
          </div>
        </div>
        </div>
      </div>
      <div className="total"></div>
    </div>
  );
}

export default Calculate;
