import React, { Component } from 'react';
import LanguagesBar from './LanguagesBar'
import ReposGrid from './ReposGrid'
import { fetchPopularRepos } from '../service/GitApi';
import Loading from './Loading';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: {},
            error: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
        this.isLoading = this.isLoading.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    isLoading() {
        return !this.state.repos[this.state.selectedLanguage] && this.state.error === null
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage: selectedLanguage,
            error: null
        });

        if (!this.state.repos[selectedLanguage]) {
            
            fetchPopularRepos(selectedLanguage)
                .then(data => {
                    // console.log('data.total_count', data.total_count)
                    data = data.items;
                    this.setState(({ repos }) => ({
                        repos: {
                            ...repos,
                            [selectedLanguage]: data
                        }
                    }));
                })
                .catch(error => {
                    console.error("Erro ao processar sua solicitação", error)
                    this.setState({
                        error: "Houve um erro ao processar sua solicitação"
                    });
                });
        }
    }

    render() {
        return (
            <>
                <LanguagesBar
                    selectedLanguage={this.state.selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />

                {this.isLoading() && <Loading text='Repositórios...' />}
                {this.state.error && <h3>{this.state.error}</h3>}
                {this.state.repos[this.state.selectedLanguage] && <ReposGrid repos={this.state.repos[this.state.selectedLanguage]} />}
            </>
        );
    }
}

export default NavBar;