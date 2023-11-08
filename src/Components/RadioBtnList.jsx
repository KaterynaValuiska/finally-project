import RadioBtn from "./RadioBtn";
import { useState } from "react";
import "./RadioBtn.css";

const RadioBtnList = () => {
  const [gender, setGender] = useState("male");
  const [blood, setBlood] = useState("2");
  const [lifestyle, setLifestyle] = useState("2");

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeBlood = (e) => {
    setBlood(e.target.value);
  };
  const onChangelifestyle = (e) => {
    setLifestyle(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();

    console.log("sub", gender, blood, lifestyle);
  };

  return (
    <form onSubmit={submit}>
      <fieldset className="content-radio">
        <p className="text-blood">Blood</p>
        <div className="content-blood-gender">
          <div className="content-blood">
            <RadioBtn
              name="blood"
              value="1"
              text="1"
              onChange={onChangeBlood}
            />
            <RadioBtn
              name="blood"
              value="2"
              text="2"
              onChange={onChangeBlood}
            />
            <RadioBtn
              name="blood"
              value="3"
              text="3"
              onChange={onChangeBlood}
            />
            <RadioBtn
              name="blood"
              value="4"
              text="4"
              onChange={onChangeBlood}
            />
          </div>
          <div className="content-gender">
            <RadioBtn
              name="gender"
              value="male"
              text="Male"
              onChange={onChangeGender}
            />
            <RadioBtn
              name="gender"
              value="female"
              text="Female"
              onChange={onChangeGender}
            />
          </div>
        </div>
        <div className="lifestyle-btn">
          <RadioBtn
            name="lifestyle"
            value="Sedentary"
            text="Sedentary lifestyle (little or no physical activity)"
            onChange={onChangelifestyle}
          />
          <RadioBtn
            name="lifestyle"
            value="Light activity"
            text="Light activity (light exercises/sports 1-3 days per week)"
            onChange={onChangelifestyle}
          />
          <RadioBtn
            name="lifestyle"
            value="Moderately active"
            text="Moderately active (moderate exercises/sports 3-5 days per week)"
            onChange={onChangelifestyle}
          />
          <RadioBtn
            name="lifestyle"
            value="Very active"
            text="Very active (intense exercises/sports 6-7 days per week)"
            onChange={onChangelifestyle}
          />
          <RadioBtn
            name="lifestyle"
            value="Extremely active"
            text="Extremely active (very strenuous exercises/sports and physical work)"
            onChange={onChangelifestyle}
          />
        </div>

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default RadioBtnList;
