import React from 'react';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

function withStorageListener(WrappedComponent) {
	return function WrappedComponentWithStorageListener(props) {
		const [StorageChange, setStorageChange] = React.useState(false);

		window.addEventListener('storage', (change) => {
			if (change.key === 'TODOS_V1') {
				console.log('Hubo cambios en TODOS_V1');
				setStorageChange(true);
			}
		});

		const toggleShow = () => {
			props.sincronize();
			setStorageChange(false);
		};
		return <WrappedComponent show={StorageChange} toggleShow={toggleShow} />;
	};
}

export { withStorageListener };
