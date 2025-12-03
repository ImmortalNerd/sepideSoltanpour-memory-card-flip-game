import GameView from "@/components/game-view";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-5">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <GameView />
      </main>
    </div>
  );
}
