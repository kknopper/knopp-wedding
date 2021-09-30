import * as React from 'react';
import styled from "styled-components";
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
		this.encode = this.encode.bind(this);
	}

	componentDidMount() {
		const dispatcher = new EventDispatcher();
		
		this.cf = ConversationalForm.startTheConversation({
			options: {
				submitCallback: this.submitCallback,
				preventAutoFocus: false,
				preventAutoStart: true,
				eventDispatcher: dispatcher,
				theme: 'dark',
			},
			tags: this.formFields,
		});

		this.cf.start();

		dispatcher.addEventListener(UserInputEvents.SUBMIT, (event) =>{
			console.log(this.cf.options);
			console.log(this.cf.userInput.inputElement);
			this.cf.userInput.inputElement.focus();
		});

		this.elem.appendChild(this.cf.el);
	}
	
	encode(data) {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&")
	}

	submitCallback() {
		var formDataSerialized = this.cf.getFormData(true);

		this.cf.addRobotChatResponse("Thank you for your responses. Submitting data...", formDataSerialized)
		console.log(formDataSerialized, this.encode({
			"form-name": "rsvpForm",
			...formDataSerialized
		}));
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: this.encode({
				"form-name": "rsvpForm",
				...formDataSerialized
			})
		}).then(() => {
			this.cf.addRobotChatResponse("Data Sent. Thanks for for RSVPing!", formDataSerialized)
		}).catch(error => alert(error))

	}

	render() {
		return (
			<StyledForm ref={ref => this.elem = ref} name="rsvpForm" data-netlify="true">
				<input type="hidden" name="form-name" value="rsvpForm" ref={ref => this.honey = ref} />
			</StyledForm>
		);
	}
}