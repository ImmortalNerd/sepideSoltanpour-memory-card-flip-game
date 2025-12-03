import { ICard } from "@/types/card.interface";

export function shuffle(array: ICard[]): ICard[] {
  const newArray = [...array];
  let currentIndex = newArray.length;

  if (currentIndex === 0) return newArray;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  const shuffledWithNewIds = newArray.map((card, index) => ({
    ...card,
    id: index + 1,
  }));

  return shuffledWithNewIds;
}