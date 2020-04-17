import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
  render () {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.seeds1} </div>
            <div className={styles.seeds2} </div>
          </div>
        );
        break;
        case ('meat'):
          ingredient = <div classname{styles.Meat}></div>;
        break;
        case ('cheese'):
          ingredient = <div classname{styles.Cheese}></div>;
        break;
        case ('meat'):
          ingredient = <div classname{styles.Meat}></div>;
        break;
        case ('bacon'):
          ingredient = <div classname{styles.Bacon}></div>;
        break;
        case ('salad'):
          ingredient = <div classname{styles.Salad}></div>;
        break;
      default:
          ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
    type: PropTypes.String.isRequired
};


export default BurgerIngredient;
