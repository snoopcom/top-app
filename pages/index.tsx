import { Htag } from '../components';
import { Button } from '../components';
import { P } from '../components';
import { Tag } from '../components';

export default function Home(): JSX.Element {
  return <div>
      <Htag tag='h1'>Test</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P>fesfsef</P>
      <P size='s'>fesfsef</P>
      <Tag>Ghost</Tag>
      <Tag size='s' color='red'>Red</Tag>
      <Tag size='m' color='green'>Большой</Tag>
      <Tag size='s' color='primary'>Большой</Tag>
    </div>;
}
