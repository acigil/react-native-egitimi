import React, {Component} from 'react';
import {Body, Header, Title} from "native-base";

import SigninForm from './SigninForm';

export default class SingIn extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Body>
						<Title>Signin</Title>
					</Body>
				</Header>
				<SigninForm />
			</React.Fragment>
		);
	}
}
