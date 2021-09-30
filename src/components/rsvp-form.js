import * as React from 'react';
import styled from "styled-components";

//Conversational Form Workaround
// import loadable from '@loadable/component';
// const { ConversationalForm } = loadable.lib(() => import('conversational-form'))
import { ConversationalForm, EventDispatcher, UserInputEvents } from "conversational-form";



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
				'name': 'guest-1-firstname',
				'cf-questions': 'What is your firstname?'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-1-lastname',
				'cf-questions': 'What is your lastname?'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-2-firstname',
				'cf-questions': "What is your plus-one's firstname?",
				'cf-conditional-guest-number': '2||3'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-2-lastname',
				'cf-questions': "What is your plus-one's lastname?",
				'cf-conditional-guest-number': '2||3'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-3-firstname',
				'cf-questions': "What is your plus-two's firstname?",
				'cf-conditional-guest-number': '3'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-2-lastname',
				'cf-questions': "What is your plus-two's lastname?",
				'cf-conditional-guest-number': '3'
			},
		];
		
		this.submitCallback = this.submitCallback.bind(this);
		this.flowCallback = this.flowCallback.bind(this);
	}

	componentDidMount() {
		const dispatcher = new EventDispatcher();
		
		this.cf = ConversationalForm.startTheConversation({
			options: {
			submitCallback: this.submitCallback,
			// flowStepCallback: this.flowCallback,
			preventAutoFocus: true,
			eventDispatcher: dispatcher,

			// loadExternalStyleSheet: false
			},
			tags: this.formFields,
			// formEl: this.elem
		});

		dispatcher.addEventListener(UserInputEvents.SUBMIT, (event) =>{
			console.log(this.cf.options);
			// this.cf.preventAutoFocus = false;
			// window.ConversationalForm.preventAutoFocus = false;

			// console.log(this.cf.options);
			this.cf.userInput.inputElement.focus();

		}, false);

		
		console.log(dispatcher)
		

		this.elem.appendChild(this.cf.el);
	}

	submitCallback() {
		var formDataSerialized = this.cf.getFormData(true);
		this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.", formDataSerialized, )
		console.log(formDataSerialized);

		// fetch("https://getform.io/f/f4bf0b4a-8fc3-4a1b-bcb0-ed22a7e7eff5", {
		// 	method: "POST",
		// 	body: formDataSerialized,
		// })
		// .then(response => console.log(response))
		// .catch(error => console.log(error))
	}

	flowCallback(dto, success, error) {
		console.log(this.cf.userInput)
		if (typeof window !== `undefined`) {
			success();
			this.cf.userInput.setFocusOnInput()
		}
	}

	render() {
		return (
			<StyledForm ref={ref => this.elem = ref} />
		);
	}
}