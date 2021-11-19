const getPublishDate = () => {
	let date = new Date()
	return date.toISOString()
}

const handleInputChange = (setState, inputRef) => {
	setState(inputRef.current.value)
}

const handleTagsChange = (setState, ref) => {
	let text = ref.current.value
	let tagsArr = text.split(' ')
	setState(tagsArr)
}

export { getPublishDate, handleInputChange, handleTagsChange }
