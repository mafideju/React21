import React, { Component } from "react";
import { navigate } from "@reach/router";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => {
        throw new Error("ERRO AO DETALHAR ANIMAL =>", err);
      });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adoptme = () => navigate(this.state.url);

  render() {
    const {
      loading,
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    if (loading) {
      return <h1>Tá vindo aí...</h1>;
    }

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button onClick={this.toggleModal}>Adota o {name}?</button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>{`Você quer adotar o ${name}?`}</h1>
                <div className="buttons">
                  <button onClick={this.adoptme}>Sim</button>
                  <button onClick={this.toggleModal}>Nope!!!</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithError(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
