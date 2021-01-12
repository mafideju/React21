import React from 'react'
import PropTypes from 'prop-types';

function LanguagesBar({ selectedLanguage, onUpdateLanguage }) {
    let supportedLanguages = ['All', 'Javascript', 'Java', 'C#', 'Python', 'Ruby', 'CSS']
    return (
        <section>
            <ul className="navbar">
                {supportedLanguages.map((lang, id) => (
                    <li key={id}>
                        <button 
                            onClick={() => onUpdateLanguage(lang)} 
                            className="navbar__button"
                            style={ lang === selectedLanguage ? { color: 'red' } : { color: 'Black' } }
                        >
                            {lang}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedLanguage}
        </section>
    )
}

LanguagesBar.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired,
}

export default LanguagesBar;


                // <li key={repo.id}>
                //     <h4>#{index + 1}</h4>
                //     <img
                //         src={repo.owner.avatar_url}
                //         alt={`Avatar para ${repo.owner.login}`}
                //     />
                //     <h2>
                //         <a href={repo.html_url}>{repo.owner.login}</a>
                //     </h2>
                // </li>