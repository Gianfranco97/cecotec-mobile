import React from 'react';
import {
  Layout,
  Divider,
  Text,
  Icon,
  List,
  ListItem,
} from '@ui-kitten/components';
import {Image} from 'react-native';
import api from '../../utils/api';
import logo from '../../assets/img/cecotec-logo.jpg';
import Loading from '../../components/Loading';

import styles from './styles';

class ProductScreen extends React.Component {
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
          renderItem={({item, index}) => (
            <ListItem
              title={() => <Text category="h6">{item.name}</Text>}
              style={styles.itemContainer}
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
