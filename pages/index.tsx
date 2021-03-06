import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import axios from 'axios';
import { Htag, Input, Textarea } from '../components';
import { Button } from '../components';
import { P } from '../components';
import { Tag } from '../components';
import { Rating } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Test</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P>fesfsef</P>
      <P size="s">fesfsef</P>
      <Tag>Ghost</Tag>
      <Tag size="s" color="red">
        Red
      </Tag>
      <Tag size="m" color="green">
        Большой
      </Tag>
      <Tag size="s" color="primary">
        Большой
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="тест" />
      <Textarea placeholder="Текст отзыва" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
