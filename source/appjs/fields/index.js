import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import TagsInput from 'react-tagsinput'
import ToggleButton from 'react-toggle-button'
import 'react-tagsinput/react-tagsinput.css'

export const fieldInput = ({ input, label, type, meta: { touched, error, warning } }) => (
	<FormGroup color={ `${ touched && error ? 'danger' : '' }` }>
		<Label>{label}</Label>
		<div>
			<Input { ...input }
				placeholder={ label }
				type={ type }
				state={ `${ touched && error ? 'danger' : '' }` }
			/>
			{ touched && ((error && <FormFeedback>{ error }</FormFeedback>) || (warning && <FormFeedback>{ warning }</FormFeedback>))}
		</div>
	</FormGroup>
);

export const fieldTags = ({ input, label, type, meta: { touched, error, warning } }) => (
	<FormGroup color={ `${ touched && error ? 'danger' : '' }` }>
		<Label>{label}</Label>
		<div>
			<TagsInput
				value={input.value || []}
				onChange={input.onChange}
				state={ `${ touched && error ? 'danger' : '' }` }
				inputProps={{placeholder: label}}
			/>
			{ touched && ((error && <FormFeedback>{ error }</FormFeedback>) || (warning && <FormFeedback>{ warning }</FormFeedback>))}
		</div>
	</FormGroup>
);

export const fieldSelect = ({ input, label, type, children, meta: { touched, error, warning } }) => (
	<FormGroup color={ `${ touched && error ? 'danger' : '' }` }>
		<Label>{label}</Label>
		<div>
			<Input { ...input }
				placeholder={ label }
				type={ type }
				state={ `${ touched && error ? 'danger' : '' }` }
			>	{ children }
			</Input>
			{ touched && ((error && <FormFeedback>{ error }</FormFeedback>) || (warning && <FormFeedback>{ warning }</FormFeedback>))}
		</div>
	</FormGroup>
);

export const fieldToggle = ({ input, label, name }) => (
	<FormGroup>
		<Label>{label}</Label>
		<div>
			<ToggleButton { ...input }
				activeLabel={<i className="fa fa-check" aria-hidden="true"></i>}
				inactiveLabel={<i className="fa fa-times" aria-hidden="true"></i>}
				value={ input.value=='1' ? true : false }
				onToggle={ (value) => input.onChange(value=!value) }/>
		</div>
	</FormGroup>
);