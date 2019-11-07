import React from 'react';
import * as S from './style';
import MealCard from '../MealCard/MealCard';
import morning from "../../assets/icon/morning.png";
import lunch from "../../assets/icon/lunch.png";
import dinner from "../../assets/icon/dinner.png";

interface Props{
}

const Meal: React.StatelessComponent<Props>= () => {
  return (
    <>
      <S.MealContainer>
        <MealCard IconSrc={morning} eatingTime={"아침"} />
        <MealCard IconSrc={lunch} eatingTime={"점심"}/>
        <MealCard IconSrc={dinner} eatingTime={"저녁"}/>
      </S.MealContainer>
    </>
  );
};

export default Meal;