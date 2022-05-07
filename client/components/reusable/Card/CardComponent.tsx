import React from 'react';
import classNames from 'classnames';
import CardHeaderComponent from './CardHeaderComponent';
import CardFooterComponent from './CardFooterComponent';

// styles
import styles from './CardComponentStyles.module.scss';


type Props = {
  classes?: string;
  displayHeader?: boolean;
  displayFooter?: boolean;
  headerProps?: object;
  footerProps?: object;
}

export default function CardComponent(_props: Props) {
  return (
    <section className={classNames(styles.cardContainer, _props.classes)}>
      { _props.displayHeader && <CardHeaderComponent  />}
      { _props.displayFooter && <CardFooterComponent  />}
    </section>
  )
}
