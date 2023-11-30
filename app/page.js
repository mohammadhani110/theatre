import Mask from "./components/mask";
import PageLayout from "./components/pageLayout";
import FullPageTransition from "./components/fullPageTransition";

export default function Home() {
  return (
    <main className="grid h-screen place-content-center overflow-hidden">
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      {/*</main> */}
      {/* <PageLayout>
        <h1>Hello world</h1>
      </PageLayout> */}
      {/* <Mask /> */}
      <FullPageTransition />
    </main>
  );
}
