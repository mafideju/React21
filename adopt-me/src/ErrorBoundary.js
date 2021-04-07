/* eslint-disable no-console */
import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

export default class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ERRO NO SISTEMA =>", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
      //   clearTimeout(delay);
    }
  }

  render() {
    const { redirect, hasError } = this.state;
    const { children } = this.props;

    if (redirect) {
      return <Redirect to="/" />;
    }

    if (hasError) {
      return (
        <div>
          <h1>Houve um erro em sua solicitação.</h1>
          <h3>
            <Link to="/">Clique aqui</Link> para voltar a página inicial ou
            aguarde 5 segundos.
          </h3>
        </div>
      );
    }

    return children;
  }
}
