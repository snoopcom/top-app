import { Htag } from "../components";
import { Button } from "../components";

export default function Home(): JSX.Element {
  return <div>
      <Htag tag='h1'>Test</Htag>
      <Button appearance='primary'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </div>;
}
