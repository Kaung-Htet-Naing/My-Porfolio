export default function truncateText(text: string) {
	let truncatedText = text;

	if (text && text.length > 500) {
		truncatedText = text.substring(0, 200) + "...";
	}

	return truncatedText;
}
