// import PageLayout from "./components/pageLayout";
import FullPageTransition from "./components/fullPageTransition";

export default function Home() {
  return (
    <main className="grid h-screen place-content-center overflow-x-hidden">
      {/* flex min-h-screen flex-col items-center justify-between p-24 */}
      {/* <PageLayout>
        <h1>Hello world</h1>
      </PageLayout> */}
      <FullPageTransition />
    </main>
  );
}
