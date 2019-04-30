function SubmitForm() {
	document.getElementById('Thankyou').classList.remove('hidden');
	document.getElementById('form').classList.add('hidden');
}

document.getElementById("submit").onclick = SubmitForm;