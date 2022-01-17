// import {
//   ReactChildren, ReactChild, ReactFragment, ReactPortal,
// } from 'react';

import { CardProps } from '../card/protocols';

export interface InitialArgs {
    card1: number
    card2: number
    card3: number
    card4: number
}

export interface Dispatch {
    type: string
}

export type IPropsCard = Omit<CardProps, 'children' >
