/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useReducer } from 'react';
import * as s from './styles';
// @ts-ignore
import students from '../../assets/images/students.png';
import aFund1 from '../../assets/images/a_fund_1.png';
import aFund2 from '../../assets/images/a_fund_2.png';
import aMedio from '../../assets/images/a_medio.png';
// @ts-ignore
import title from '../../assets/images/title-card-1.png';
import title2 from '../../assets/images/title-card-2.png';
import title3 from '../../assets/images/title-card-3.png';
import title4 from '../../assets/images/title-card-4.png';
import { ContentCardInfantil } from './contentCard/contentCardInfantil';
import { ContentCardFundamental1 } from './contentCard/contentCardFundamental1';
import { ContentCardFundamental2 } from './contentCard/contentCardFundamental2';
import { ContentCardMedio } from './contentCard/contentCardMedio';
import { InitialArgs, Dispatch, IPropsCard } from './protocols';
import { Sections } from '../section/Section';

const initialArgs: InitialArgs = {
  card4: 1,
  card3: 2,
  card2: 3,
  card1: 4,
};

// eslint-disable-next-line consistent-return
function reducer(state: InitialArgs, action: Dispatch) {
  switch (action.type) {
    case 'card1':
      return {
        card1: 4,
        card2: 3,
        card3: 2,
        card4: 1,
      };

    case 'card2':
      return {
        card1: 3,
        card2: 4,
        card3: 2,
        card4: 1,
      };

    case 'card3':
      return {
        card1: 3,
        card2: 2,
        card3: 4,
        card4: 1,
      };

    case 'card4':
      return {
        card1: 1,
        card2: 2,
        card3: 3,
        card4: 4,
      };

    default:
      return state;
  }
}

export function ApresentatiosCard() {
  const [state, dispatch] = useReducer(reducer, initialArgs);

  const propsCardInfantil: IPropsCard = {
    backGroundColor: 'var(--light-blue)',
    tabText: 'Educação Infantil',
    srcIgmTitle: title,
    presentationSrcImg: students,
    zIndex: state.card1,
    click: () => dispatch({ type: 'card1' }),
    left: '5%',
  };

  const propsCardFundamental1: IPropsCard = {
    backGroundColor: 'var(--green)',
    tabText: 'Fundamental I',
    srcIgmTitle: title2,
    presentationSrcImg: aFund1,
    zIndex: state.card2,
    click: () => dispatch({ type: 'card2' }),
    left: '25%',
  };

  const propsCardFundamental2: IPropsCard = {
    backGroundColor: 'var(--brown)',
    tabText: 'Fundamental II',
    srcIgmTitle: title3,
    presentationSrcImg: aFund2,
    zIndex: state.card3,
    click: () => dispatch({ type: 'card3' }),
    left: '45%',
  };

  const propsCardMedio: IPropsCard = {
    backGroundColor: 'var(--drak-yellow)',
    tabText: 'Ensino Médio',
    srcIgmTitle: title4,
    presentationSrcImg: aMedio,
    zIndex: state.card4,
    click: () => dispatch({ type: 'card4' }),
    left: '65%',
  };

  return (
    <Sections>
      <s.Container>
        <ContentCardInfantil {...propsCardInfantil} />
        <ContentCardFundamental1 {...propsCardFundamental1} />
        <ContentCardFundamental2 {...propsCardFundamental2} />
        <ContentCardMedio {...propsCardMedio} />
      </s.Container>
    </Sections>
  );
}
