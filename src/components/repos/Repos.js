import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem';

// pull out the repos
//create a list and map through each repo
export const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
}


Repos.propTypes ={
    repos: PropTypes.array.isRequired
}
export default Repos;
