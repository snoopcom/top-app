import { useContext } from 'react';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: { opacity: 0, height: 0 },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((menuItem) => {
          if (menuItem._id.secondCategory === secondCategory) {
            menuItem.isOpened = !menuItem.isOpened;
          }
          return menuItem;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => (
          <div key={menuItem.route}>
            <Link href={`/${menuItem.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: menuItem.id === firstCategory,
                  })}
                >
                  {menuItem.icon}
                  <span>{menuItem.name}</span>
                </div>
              </a>
            </Link>
            {menuItem.id === firstCategory && buildSecondLevel(menuItem)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((item) => {
          if (
            item.pages
              .map((page) => page.alias)
              .includes(router.asPath.split('/')[2])
          ) {
            item.isOpened = true;
          }
          return (
            <div key={item._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(item._id.secondCategory)}
              >
                {item._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial={item.isOpened ? 'visible' : 'hidden'}
                animate={item.isOpened ? 'visible' : 'hidden'}
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: item.isOpened,
                })}
              >
                {buildThirdLevel(item.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <motion.div key={page._id} variants={variantsChildren}>
        <Link href={`/${route}/${page.alias}`}>
          <a
            className={cn(styles.thridLevel, {
              [styles.thridLevelActive]:
                `/${route}/${page.alias}` === router.asPath,
            })}
          >
            {page.category}
          </a>
        </Link>
      </motion.div>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
