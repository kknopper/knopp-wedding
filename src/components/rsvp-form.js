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
				'cf-questions': '(Check your invite to see the number of tickets provided)'
			},
			{
				'tag': 'input',
				'type': 'number',
				'id': 'invite-number',
				'name': 'invite-number',
				'cf-questions': 'How many tickets did you receive in your invitation?',
				'min':"1",
				'max':'5',
				'cf-error': "Must be between 1 and 5",
				'required' : true
			},
			{
				
				'tag': 'cf-robot-message',
				'cf-questions': "Please note that each ticket represents 1 invite per guest"
			},
			{
				'tag': 'input',
				'type': 'number',
				'id': 'attending-wedding-number',
				'name': 'attending-wedding-number',
				'cf-questions': 'How many in your party are attending the wedding?',
				'min':"0",
				'max':'5',
				'cf-error': "Must be between 0 and 5",
				'required' : true
			},
			{
				'tag': 'cf-robot-message',
				'cf-questions': "Sweet! We're glad some of you can make it",
				'cf-conditional-attending-wedding-number': '^[1-9][0-9]*$'//greater than 0
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-1-fullname',
				'cf-questions': 'What is your full name?'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-2-fullname',
				'cf-questions': "What is your plus-one's full name?",
				'cf-conditional-attending-wedding-number': '2||3||4||5'
			},
			{
				'tag': 'cf-robot-message',
				'cf-questions': "We're sorry you can't make it to our wedding 😞 Thank you for letting us know.",
				'cf-conditional-attending-wedding-number': '0'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-3-fullname',
				'cf-questions': "What is your plus-two's full name?",
				'cf-conditional-attending-wedding-number': '3||4||5'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-4-fullname',
				'cf-questions': "What is your plus-three's full name?",
				'cf-conditional-attending-wedding-number': '4||5'
			},
			{
				'tag': 'input',
				'type': 'text',
				'name': 'guest-5-fullname',
				'cf-questions': "What is your plus-four's full name?",
				'cf-conditional-attending-wedding-number': '5'
			},
			{
				'tag': 'input',
				'type': 'number',
				'name': 'attending-breakfast-number',
				'cf-questions': 'How many in your party are attending breakfast the following day?',
				'min':"0",
				'max':'5',
				'cf-error': "Must be between 0 and 5",
				'required' : true,
				'cf-conditional-attending-wedding-number': '^[1-9][0-9]*$'//greater than 0
			},
		];
		
		this.submitCallback = this.submitCallback.bind(this);
		this.encode = this.encode.bind(this);
	}

	componentDidMount() {
		const dispatcher = new EventDispatcher();
		console.log(this.elem)
		
		this.cf = ConversationalForm.startTheConversation({
			options: {
				submitCallback: this.submitCallback,
				preventAutoFocus: true,
				preventAutoStart: true,
				eventDispatcher: dispatcher,
				theme: 'dark',
			},
			// formEl: this.elem
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
			<StyledForm ref={ref => this.elem = ref} name="rsvpForm" data-netlify="true" cf-form>
				<input type="hidden" name="form-name" value="rsvpForm" />
				{/* <cf-robot-message cf-questions="Welcome! We're excited for you to attend our wedding!" /> */}
				{/* <cf-robot-message cf-questions="(Please check your invite to see the number of tickets provided)" /> */}
				<input type="hidden" id="invite-number" name="invite-number" cf-questions="How many tickets did you receive in your invitation?" min="1" max="5" cf-error="Must be between 1 and 5" required />
				<input type="hidden" id="attending-wedding-number" name="attending-wedding-number" cf-questions="How many in your party are attending the wedding?" min="0" max="5" cf-error="Must be between 0 and 5" required />
				<input type="hidden" name="guest-1-fullname" cf-questions="What is your full name?" />
				<input type="hidden" name="guest-2-fullname" cf-questions="What is your plus one's first name?" cf-conditional-guest-number="2||3||4||5" />
				<input type="hidden" name="guest-3-fullname" cf-questions="What is your plus two's last name?" cf-conditional-guest-number="3||4||5" />
				<input type="hidden" name="guest-4-fullname" cf-questions="What is your plus two's last name?" cf-conditional-guest-number="4||5" />
				<input type="hidden" name="guest-5-fullname" cf-questions="What is your plus two's last name?" cf-conditional-guest-number="5" />
				<input type="hidden" id="attending-breakfast-number" name="attending-breakfast-number" cf-questions="How many in your party are attending breakfast the following day?" min="0" max="5" cf-error="Must be between 0 and 5" required />
			</StyledForm>
		);
	}
}