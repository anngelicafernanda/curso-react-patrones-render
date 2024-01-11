import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index.js';
import './index.css';

function App(props) {
	return (
		<h1>
			¡{props.saludo}, {props.nombre}!
		</h1>
	);
}

function withSaludo(WrappedComponent) {
	return function WrappedComponentWithSaludo(saludo) {
		return function ComponenteDeVerdad(props) {
			return (
				<React.Fragment>
					<WrappedComponent {...props} saludo={saludo} />
					<p>Estamos acompañando al WrappedComponent</p>
				</React.Fragment>
			);
		};
	};
}

const AppWithSaludo = withSaludo(App)('hola');

ReactDOM.render(
	// <App saludo="Buenas" nombre="Nath" />,
	<AppWithSaludo nombre="Juanita" />,
	document.getElementById('root'),
);
