"use client";
import { useCardStore } from "@/store/card.store";
import { ICard } from "@/types/card.interface";
//-----------------------------

const Card = ({ card }: { card: ICard }) => {
  const {
    flipedCards,
    updateCards,
    grid,
    reset,
    updateMoves,
  } = useCardStore();

  const handleFlip = () => {
    updateMoves();
    const hasPairFlipped = flipedCards.length > 0 ? flipedCards[flipedCards.length - 1].content === card.content : false;
    if (hasPairFlipped) {
      updateCards([...flipedCards, card]);
      if (flipedCards.length === grid * grid - 1) {
        alert("You win!");
        setTimeout(() => {
          reset();
        }, 2000);
      }
    } else {
      if (flipedCards.length === 0 || flipedCards.length % 2 === 0) {
        updateCards([...flipedCards, card]);
        return;
      } else {
        updateCards([...flipedCards, card]);
        setTimeout(() => {
          const countMap = flipedCards.reduce((acc: Record<string, number>, item) => {
            if (!acc[item.content]) {
              acc[item.content] = 0;
            }
            acc[item.content]++;
            return acc;
          }, {});
          const uniqueItem = flipedCards.find(
            (item) => countMap[item.content] === 1
          );
          updateCards([
            ...flipedCards.filter(
              (c) => c.id !== card.id && uniqueItem?.id !== c.id
            ),
          ]);
        }, 1500);
      }
    }
  };

  return (
    <div
      className="bg-transparent cursor-pointer"
      onClick={() => {
        handleFlip();
      }}
    >
      <div
        className={`relative ${
          grid === 4 ? "w-18 h-18" : grid === 8 ? "w-12 h-12" : "w-8 h-8"
        }  transition-transform duration-1000 ease-in-out transform-3d ${
          flipedCards.some((c) => c.id === card.id) ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 rounded bg-pink-500 flex items-center justify-center text-white font-bold backface-hidden">
          ⭐
        </div>
        <div className="absolute inset-0 rounded bg-pink-700 flex items-center justify-center text-white font-bold rotate-y-180 backface-hidden">
          {card.content}
        </div>
      </div>
    </div>
  );
};

export default Card;
