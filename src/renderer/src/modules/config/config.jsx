import { Link } from 'react-router-dom';
import Versions from '../../common/components/versionsInfo';

const Config = () => {
	return (
		<div className="container">
			<Versions />

			<center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', width: '90vw' }}>
				<Link to="/">Go to the Home screen</Link>
			</center>
		</div>
	);
};

export default Config;
