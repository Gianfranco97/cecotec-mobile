import React from 'react';
import {
  Layout,
  Divider,
  Text,
  Icon,
  List,
  ListItem,
} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import api from '../../utils/api';
import logo from '../../assets/img/cecotec-logo.jpg';
import Loading from '../../components/Loading';

import styles from './styles';

class ProductScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {
    loading: true,
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({loading: true}, () => {
      setTimeout(async () => {
        try {
          const products = await api.getProducts();

          this.setState({loading: false, data: products});
        } catch (error) {}
      }, 1000);
    });
  }

  render() {
    const {data, loading} = this.state;
    const {navigation} = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <Layout style={{flex: 1}}>
        <Layout style={styles.imageContainer}>
          <Image source={logo} />
        </Layout>
        <List
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={({item}) => (
            <ListItem
              title={() => <Text category="h6">{item.name}</Text>}
              style={styles.itemContainer}
              onPress={() => navigation.navigate('SingleProduct', {...item})}
              accessoryLeft={(props) => (
                <Icon {...props} name="shopping-bag-outline" />
              )}
            />
          )}
        />
      </Layout>
    );
  }
}

export default ProductScreen;
