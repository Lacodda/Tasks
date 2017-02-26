export const validate = (values = {}) => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Обязательное поле'
	} else if (values.name.length > 30) {
		errors.name = 'Длина значения не должна превышать 30 символов'
	}

	if (!values.priority) {
		errors.priority = 'Обязательное поле'
	}

	return errors
};

export const warn = values => {
	const warnings = {};

	return warnings;
};