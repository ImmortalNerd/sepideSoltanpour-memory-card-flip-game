"use client";
import { ICard } from "@/types/card.interface";
import { create } from "zustand";

type CardStore = {
  grid: number;
  cards: ICard[];
  flipedCards: ICard[];
  moves: number;
  updateGrid: (grid: number) => void;
  updateCards: (cards: ICard[]) => void;
  updateMoves: () => void;
  reset: () => void;
};

export const useCardStore = create<CardStore>()((set) => ({
  grid: 4,
  cards: [
    {
      id: 1,
      content: "🍎",
    },
    {
      id: 2,
      content: "🍊",
    },
    {
      id: 3,
      content: "🍋",
    },
    {
      id: 4,
      content: "🍌",
    },
    {
      id: 5,
      content: "🍉",
    },
    {
      id: 6,
      content: "🍇",
    },
    {
      id: 7,
      content: "🍓",
    },
    {
      id: 8,
      content: "🍈",
    },
    {
      id: 9,
      content: "🍒",
    },
    {
      id: 10,
      content: "🍑",
    },
    {
      id: 11,
      content: "🥭",
    },
    {
      id: 12,
      content: "🍍",
    },
    {
      id: 13,
      content: "🥝",
    },
    {
      id: 14,
      content: "🍅",
    },
    {
      id: 15,
      content: "🥥",
    },
    {
      id: 16,
      content: "🥑",
    },
    {
      id: 17,
      content: "🥒",
    },
    {
      id: 18,
      content: "🥔",
    },
    {
      id: 19,
      content: "🥕",
    },
    {
      id: 20,
      content: "🌶️",
    },
    {
      id: 21,
      content: "🌽",
    },
    {
      id: 22,
      content: "🥬",
    },
    {
      id: 23,
      content: "🥦",
    },
    {
      id: 24,
      content: "🥜",
    },
    {
      id: 25,
      content: "🫑",
    },
    {
      id: 26,
      content: "🍄",
    },
    {
      id: 27,
      content: "🍆",
    },
    {
      id: 28,
      content: "🫘",
    },
    {
      id: 29,
      content: "🧄",
    },
    {
      id: 30,
      content: "🧅",
    },
    {
      id: 31,
      content: "🍏",
    },
    {
      id: 32,
      content: "🍐",
    },
    {
      id: 33,
      content: "💐",
    },
    {
      id: 34,
      content: "🌸",
    },
    {
      id: 35,
      content: "💮",
    },
    {
      id: 36,
      content: "🌹",
    },
    {
      id: 37,
      content: "🥀",
    },
    {
      id: 38,
      content: "🌺",
    },
    {
      id: 39,
      content: "🌻",
    },
    {
      id: 40,
      content: "🌼",
    },
    {
      id: 41,
      content: "🏵️",
    },
    {
      id: 42,
      content: "🌷",
    },
    {
      id: 43,
      content: "🪷",
    },
    {
      id: 44,
      content: "🪻",
    },
    {
      id: 45,
      content: "⚘",
    },
    {
      id: 46,
      content: "🌱",
    },
    {
      id: 47,
      content: "🌿",
    },
    {
      id: 48,
      content: "☘️",
    },
    {
      id: 49,
      content: "🍀",
    },
    {
      id: 50,
      content: "🌵",
    },
    {
      id: 51,
      content: "🪴",
    },
    {
      id: 52,
      content: "🌳",
    },
    {
      id: 53,
      content: "🌲",
    },
    {
      id: 54,
      content: "🌴",
    },
    {
      id: 55,
      content: "🪵",
    },
    {
      id: 56,
      content: "🐵",
    },
    {
      id: 57,
      content: "🦍",
    },
    {
      id: 58,
      content: "🐶",
    },
    {
      id: 59,
      content: "🐕",
    },
    {
      id: 60,
      content: "🐩",
    },
    {
      id: 61,
      content: "🐺",
    },
    {
      id: 62,
      content: "🦊",
    },
    {
      id: 63,
      content: "🐱",
    },
    {
      id: 64,
      content: "🐈",
    },
    {
      id: 65,
      content: "🦁",
    },
    {
      id: 66,
      content: "🐯",
    },
    {
      id: 67,
      content: "🐅",
    },
    {
      id: 68,
      content: "🐆",
    },
    {
      id: 69,
      content: "🐴",
    },
    {
      id: 70,
      content: "🦄",
    },
    {
      id: 71,
      content: "🦓",
    },
    {
      id: 72,
      content: "🦌",
    },
    {
      id: 73,
      content: "🐮",
    },
    {
      id: 74,
      content: "🐂",
    },
    {
      id: 75,
      content: "🐃",
    },
    {
      id: 76,
      content: "🐷",
    },
    {
      id: 77,
      content: "🐖",
    },
    {
      id: 78,
      content: "🐽",
    },
    {
      id: 79,
      content: "🐸",
    },
    {
      id: 80,
      content: "🐐",
    },
    {
      id: 81,
      content: "🐑",
    },
    {
      id: 82,
      content: "🐏",
    },
    {
      id: 83,
      content: "🐪",
    },
    {
      id: 84,
      content: "🐫",
    },
    {
      id: 85,
      content: "🦙",
    },
    {
      id: 86,
      content: "🦒",
    },
    {
      id: 87,
      content: "🐘",
    },
    {
      id: 88,
      content: "⚘️",
    },
    {
      id: 89,
      content: "🐭",
    },
    {
      id: 90,
      content: "🐹",
    },
    {
      id: 91,
      content: "🐰",
    },
    {
      id: 92,
      content: "🐻",
    },
    {
      id: 93,
      content: "🐨",
    },
    {
      id: 94,
      content: "🐼",
    },
    {
      id: 95,
      content: "🦥",
    },
    {
      id: 96,
      content: "🦦",
    },
    {
      id: 97,
      content: "🐧",
    },
    {
      id: 98,
      content: "🦆",
    },
    {
      id: 99,
      content: "🦅",
    },
    {
      id: 100,
      content: "🦉",
    },
    {
      id: 101,
      content: "🦤",
    },
    {
      id: 102,
      content: "🦃",
    },
    {
      id: 103,
      content: "🦚",
    },
    {
      id: 104,
      content: "🦜",
    },
    {
      id: 105,
      content: "🐦",
    },
    {
      id: 106,
      content: "🐤",
    },
    {
      id: 107,
      content: "🐣",
    },
    {
      id: 108,
      content: "🐥",
    },
    {
      id: 109,
      content: "🪹",
    },
    {
      id: 110,
      content: "🐦‍⬛",
    },
    {
      id: 111,
      content: "🕊️",
    },
    {
      id: 112,
      content: "🐛",
    },
    {
      id: 113,
      content: "🦋",
    },
    {
      id: 114,
      content: "🐌",
    },
    {
      id: 115,
      content: "🐞",
    },
    {
      id: 116,
      content: "🐜",
    },
    {
      id: 117,
      content: "🪲",
    },
    {
      id: 118,
      content: "🪳",
    },
    {
      id: 119,
      content: "🐝",
    },
    {
      id: 120,
      content: "🪰",
    },
    {
      id: 121,
      content: "🪱",
    },
    {
      id: 122,
      content: "🦗",
    },
    {
      id: 123,
      content: "🕷️",
    },
    {
      id: 124,
      content: "🕸️",
    },
    {
      id: 125,
      content: "🐙",
    },
    {
      id: 126,
      content: "🦑",
    },
    {
      id: 127,
      content: "🦐",
    },
    {
      id: 128,
      content: "🦀",
    },
  ],
  flipedCards: [],
  moves: 0,
  updateGrid: (grid: number) => {
    set(() => ({
      grid,
      flipedCards: [],
    }));
  },
  updateCards: (cards: ICard[]) => {
    set(() => ({
      flipedCards: cards,
    }));
  },
  updateMoves: () => {
    set((state) => ({
      moves: state.moves + 1,
    }));
  },
  reset: () => {
    set(() => ({
      flipedCards: [],
      moves: 0,
    }));
  },
}));
