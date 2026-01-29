import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-screen h-full bg-no-repeat">
        <Introduction />
      </div>
    </main>
  );
}
