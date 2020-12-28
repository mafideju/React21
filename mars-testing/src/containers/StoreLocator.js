import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

class StoreLocator extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                currentMap: 'none.png'
            }
        ]
        this.shops = [
            {
                location: 'Portland',
                address: '13 Portland Drive'
            },
            {
                location: 'São Paulo',
                address: 'Avenida Ipiranga 200'
            },
            {
                location: '',
                address: ''
            }
        ]
    }

    
    render() {
        let storeButtons = this.shops.map(({ location, id }) => (
            <Button location={location ? location : "Todos os Lugares" } id={id} />
        ));
        return (
            <>
                <Header />
                <div style={{ margin: '1rem' }}>
                    { storeButtons }
                </div>
                <Map imagename={this.state.currentMap} location={this.props.location} />
            </>
        )
    }
}

export default StoreLocator;