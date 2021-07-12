import { Htag } from '../components';
import { Button } from '../components';
import { P } from '../components';

export default function Home(): JSX.Element {
  return <div>
      <Htag tag='h1'>Test</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P>fesfsef</P>
      <P size='s'>fesfsef</P>
    </div>;
}
