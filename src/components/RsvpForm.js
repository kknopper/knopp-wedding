import * as React from 'react';
import styled from "styled-components";

//Conversational Form Workaround
// import loadable from '@loadable/component';
// const { ConversationalForm } = loadable.lib(() => import('conversational-form'))
import { ConversationalForm } from "conversational-form";



const StyledForm = styled.form`
	margin: 0 auto;
	position: relative;
	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
	border-radius: 8px;
	min-height: 50vh;

	.conversational-form, .conversational-form-inner {
		border-radius: 8px;
		z-index: 0;
	}
`;

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.formFields = [
			{
				
				'tag': 'cf-robot-message',
				'cf-questions': "Welcome! We're excited for you to attend our wedding!"
			},
			{
				
				'tag': 'cf-robot-message',
				'cf-questions': '(Please check your invite to see the number of tickets provided)'
			},
			{
				'tag': 'input',
				'type': 'number',
				'name': 'guest-number',
				'cf-questions': 'How many adults (18+) are attending for your party?',
				'min':"0",
				'max':'3',
				'cf-error': "Must be between 0 and 3",
				'required' : true
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'firstname',
				'cf-questions': 'What is your firstname?'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'lastname',
				'cf-questions': 'What is your lastname?'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'firstname',
				'cf-questions': "What is your plus-one's firstname?",
				'cf-conditional-guest-number': '2||3'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'lastname',
				'cf-questions': "What is your plus-one's lastname?",
				'cf-conditional-guest-number': '2||3'
			}
		];
		
		this.submitCallback = this.submitCallback.bind(this);
	}

	componentDidMount() {
		this.cf = ConversationalForm.startTheConversation({
			options: {
			submitCallback: this.submitCallback,
			preventAutoFocus: true,
			// loadExternalStyleSheet: false
			},
			tags: this.formFields,
			// formEl: this.elem
		});
		this.elem.appendChild(this.cf.el);
	}

	submitCallback() {
		var formDataSerialized = this.cf.getFormData(true);
		this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.", formDataSerialized, )
	}

	render() {
		return (
			<StyledForm ref={ref => this.elem = ref} />
		);
	}
}