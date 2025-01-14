import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const { cart } = useContext(CartContext);
	console.log('SET:' , cart)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
