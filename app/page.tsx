import { AIAdventureGame } from "@/components/ai-adventure-game";

export default function Home() {
  return (
    <div className="section-shell min-h-screen">
      <main className="mx-auto w-full">
        <AIAdventureGame />
      </main>
    </div>
  );
}
