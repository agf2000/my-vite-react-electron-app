import { Route, createHashRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import BasicLayout from './common/components/layouts/basicLayout';
import MainLayout from './common/components/layouts/mainLayout';

import { HomeScreen, AboutScreen, ConfigScreen } from './modules';

const router = createHashRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomeScreen />} />
				<Route path='config' element={<ConfigScreen />} />
			</Route>
			<Route path="about" element={<BasicLayout />}>
				<Route index element={<AboutScreen />} />
			</Route>
		</Route>,
	),
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;