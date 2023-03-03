import Versions from '../../common/components/versionsInfo';
import { Link } from 'react-router-dom';

const ipc = window.electron.ipcRenderer;

const Home = () => {
	const openAboutWindow = (e) => {
		e.preventDefault();

		ipc.send('open-win', '/about');
	};

	return (
		<div className="container">
			<Versions />

			<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90vh', width: '90vw' }}>
				<div style={{ margin: '20px' }}>
					<Link to="config">Go to the Config screen</Link>
				</div>

				<div style={{ margin: '20px' }}>
					<button onClick={openAboutWindow} style={{ padding: '5px', cursor: 'pointer' }}>
						Open About screen on new electron window
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
