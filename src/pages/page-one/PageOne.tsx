import React from 'react';
import { ApresentatiosCard } from '../../components/apresentatios-card/apresentationCard';
import { Banner } from './banner/Banner';
import { Sections2 } from './section-2/Section2';
import { Sections3 } from './section-3/Section3';
import { Sections4 } from './section-4/Section';

export function PageOne() {
  return (
    <>
      <Banner />
      <ApresentatiosCard />
      <Sections2 />
      <Sections3 />
      <Sections4 />
    </>
  );
}
