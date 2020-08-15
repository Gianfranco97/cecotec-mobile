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
    const {data} = this.state;

    return (
      <Layout style={{flex: 1}}>
        <Layout style={{justifyContent: "center", alignItems: "center", height: 100}}>
          <Image source={logo} />
        </Layout>
        <List
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={({item, index}) => (
            <ListItem
              title={() => <Text category="h6">{item.name}</Text>}
              style={{height: 90}}
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
