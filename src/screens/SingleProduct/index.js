import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import PropTypes from 'prop-types';

import styles from './styles';

class SingleProductScreen extends React.Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
  };

  render() {
    const {route} = this.props;
    const {name, price, quantity} = route.params;

    return (
      <Layout style={styles.container}>
        <Text category="h1" style={styles.title}>
          {name}
        </Text>
        <Layout style={{flexDirection: 'row'}}>
          <Layout level="3" style={styles.card}>
            <Text style={styles.cardText}>Price: {price}</Text>
          </Layout>
          <Layout level="3" style={styles.card}>
            <Text style={styles.cardText}>Quantity: {quantity}</Text>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default SingleProductScreen;
