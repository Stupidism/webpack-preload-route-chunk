import React from 'react';
class AsyncRoute extends React.PureComponent {
  state = {
    loading: false,
    loaded: null,
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.loadComponent();
  }

  loadComponent = async () => {
    const { loader } = this.props;

    try {
      this.setState({ loading: true });
      const Component = await loader();
      console.info('Component', Component);
      this.Component = Component.default;
      this.setState({
        loaded: true,
        loading: false,
      });
    } catch (e) {
      console.error('AsyncRoute', e);
      this.setState({ loaded: false, loading: false });
    }
  };

  render() {
    console.info('state', this.state);
    if (this.state.loading) {
      return 'Loading ...';
    }

    if (this.state.loaded) {
      const { Component } = this;
      console.info('this.Component', this.Component, this.props);
      return <Component match={this.props.match} />;
    }

    return <div>网络错误, 请尝试刷新</div>;
  }
}

export default AsyncRoute;
