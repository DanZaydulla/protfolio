import React from 'react';
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { gridItems } from '@/data'; // Assuming '@/data' is properly aliased in your configuration

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id} // It's best practice to place the 'key' property here
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
