"use client";
import React, { useEffect, useState } from "react";
import Button from "./shared/button";
import Card from "./card";
import { useCardStore } from "@/store/card.store";
import { shuffle } from "@/utils/shuffle";
import { ICard } from "@/types/card.interface";
//-------------------------------

const GameView = () => {
  const { cards, grid, updateGrid, moves } = useCardStore();
  const [shuffledCards, setShuffledCards] = useState<ICard[]>([]);

  useEffect(() => {
    const cardCount = (grid * grid) / 2;
    const cardsToFlip = cards.slice(0, cardCount);
    const totalCards = [...cardsToFlip, ...cardsToFlip];
    const shuffled = shuffle(totalCards);
    setShuffledCards(shuffled);
  }, [grid, cards]);

  return (
    <div className="grid grid-rows-[80px_1fr_80px] gap-5">
      <div className="flex flex-col gap-3 items-center">
        <p>You can pick grid size:</p>
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => updateGrid(4)}
            variant={grid === 4 ? "contained" : "outlined"}
          >
            4 x 4
          </Button>
          <Button
            onClick={() => updateGrid(8)}
            variant={grid === 8 ? "contained" : "outlined"}
          >
            8 x 8
          </Button>
          <Button
            onClick={() => updateGrid(16)}
            variant={grid === 16 ? "contained" : "outlined"}
          >
            16 x 16
          </Button>
        </div>
      </div>
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${grid}, minmax(0, 1fr))` }}
      >
        {shuffledCards.length === 0 ? (
          <div className={`flex justify-center items-center col-span-[${grid}]`}>
            Loading ...
          </div>
        ) : (
          shuffledCards.map((card) => (
            <Card card={card} key={card.id} />
          ))
        )}
      </div>
      <div className="flex items-center justify-center gap-5">
        Moves: {moves}
      </div>
    </div>
  );
};

export default GameView;
