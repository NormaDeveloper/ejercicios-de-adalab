import Repo from './Repo';
function RepoList(props) {
  const result = props.listData.map((repo, index) => (
    <li key={repo.id}>
      <Repo oneRepo={repo} deleteRepo={props.deleteRepo} />
    </li>
  ));
  return <ul>{result}</ul>;
}
export default RepoList;
