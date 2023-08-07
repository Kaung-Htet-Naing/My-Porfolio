const birthDate = "1999-12-6"; // Replace with your birthdate in the format 'YYYY-MM-DD'

export default function calculateAge() {
	const birthYear = new Date(birthDate).getFullYear();
	const currentYear = new Date().getFullYear();
	const age = currentYear - birthYear;

	// Check if the birthdate has occurred this year
	const birthMonth = new Date(birthDate).getMonth();
	const currentMonth = new Date().getMonth();
	const birthDay = new Date(birthDate).getDate();
	const currentDay = new Date().getDate();

	if (
		currentMonth < birthMonth ||
		(currentMonth === birthMonth && currentDay < birthDay)
	) {
		// If the birthdate has not occurred yet this year, subtract 1 from the age
		return age - 1;
	} else {
		return age;
	}
}
