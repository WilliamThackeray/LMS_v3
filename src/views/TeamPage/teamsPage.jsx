import LocalStorageService from '../../services/Model/local_storage_service.js'
import TeamsAside from './teamAside.jsx';
import TeamsList from './teamList.jsx';
import AppViewModel from '../../services/Model/appViewModel.meta.js';

export default function TeamsPage() {
  let localStorage = new LocalStorageService(AppViewModel.data, AppViewModel.list.entity)

  console.log('localStorage.delete: ', localStorage.delete)
  return (
    <>
      <div className="container-fluid main bg-gray">
        <div className="row d-flex">
          <TeamsAside></TeamsAside>
          <TeamsList viewModel={AppViewModel} model={localStorage}></TeamsList>
        </div>
      </div>
    </>)
}