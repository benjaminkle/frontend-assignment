import Greeting from "../components/Greeting";

export default function Home() {
  return (
    <div>
      <h1>
        FOUNDATIONS OF <br></br> ADV. FRONT-END DEVELOPMENT
      </h1>
      <Greeting defaultName="Guest" />
    </div>
  );
}
