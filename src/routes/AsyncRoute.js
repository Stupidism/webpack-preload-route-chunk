import React from 'react';

class AsyncRoute extends React.PureComponent {
  state = {
    loading: false,
    loaded: null,
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { meta } = this.props;
    console.info('AsyncRoute', this.props.meta.Component);
    if (!meta.Component) {
      this.loadComponent();
    } else {
      this.setState({ loaded: true });
    }
  }

  loadComponent = async () => {
    const { meta } = this.props;

    try {
      this.setState({ loading: true });
      const promise = meta.promise || this.props.loader();
      const Component = await promise;
      console.info('Component', meta, promise, Component);
      this.setState({
        loaded: true,
        loading: false,
      });
    } catch (e) {
      this.setState({ loaded: false, loading: false });
    }
  };

  render() {
    console.info('state', this.state);
    if (this.state.loading) {
      return 'Loading ...';
    }

    if (this.state.loaded) {
      const {
        meta: { Component },
        match,
      } = this.props;
      console.info('this.Component', this.Component, this.props);
      return <Component match={match} />;
    }

    return <div>网络错误, 请尝试刷新</div>;
  }
}

export default AsyncRoute;
