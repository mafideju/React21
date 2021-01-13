import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'
import Card from './Card';
// import { render } from 'react-dom';

function ReposGrid({ repos }) {
    return (
        <ul className="repos__card">
            {repos.map((repo, index) => (
                <li key={repo.id}>
                    <Card
                        header={`# ${index + 1}`}
                        avatar={repo.owner.avatar_url}
                        name={repo.owner.login}
                        href={repo.html_url}
                    >
                        <ul>
                            <li>
                                <FaUser size={20} />
                                <a href={`https://github.com/${repo.owner.login}`}>{repo.owner.login}</a>
                            </li>
                            <li>
                                <FaStar size={20}/>
                                {repo.stargazers_count.toLocaleString()} Stars
                            </li>
                            <li>
                                <FaCodeBranch size={20} />
                                {repo.forks} Forks
                            </li>
                            <li>
                                <FaExclamationTriangle size={20} />
                                {repo.open_issues} Issues
                            </li>
                        </ul>
                    </Card>
                </li>
            ))}
        </ul>
    )
}

ReposGrid.propTypes = {
    repos: PropTypes.array.isRequired
}

ReposGrid.defaultProps = {
    repos: []
}

export default ReposGrid;



// function ReposGrid({ repos }) {
//     return (
//         <ul className='repos__card'>
//             {repos.map((repo, index) => {
//                 // <li key={repo.id}>
//                 //     <Card
//                 //         header={`# ${index + 1}`}
//                 //         avatar={repo.owner.avatar_url}
//                 //         name={repo.owner.login}
//                 //         href={repo.html_url}
//                 //     />
//                 // </li>
//                 return (
//                     <li key={repo.id} className='repos__items'>
//                         <h4>#{index + 1}</h4>
//                         <img
//                             src={repo.owner.avatar_url}
//                             alt={`Avatar para ${repo.owner.login}`}
//                             className='repos__avatar'
//                         />
//                         <h2>
//                             <a href={repo.html_url}>{repo.owner.login}</a>
//                         </h2>
//                         <ul>
//                             <li>
//                                 <FaUser size={20} />
//                                 <a href={`https://github.com/${repo.owner.login}`}>{repo.owner.login}</a>
//                             </li>
//                             <li>
//                                 <FaStar size={20}/>
//                                 {repo.stargazers_count.toLocaleString()} Stars
//                             </li>
//                             <li>
//                                 <FaCodeBranch size={20} />
//                                 {repo.forks} Forks
//                             </li>
//                             <li>
//                                 <FaExclamationTriangle size={20} />
//                                 {repo.open_issues} Issues
//                             </li>
//                         </ul>
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// }