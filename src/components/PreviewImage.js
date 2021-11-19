import React from 'react'

const PreviewImage = ({ src }) => {
	const bgCSS = {
		backgroundImage: `url("${src}")`,
	}

	return (
		<div className="preview-img overflow-hidden rounded-lg">
			<div className="rounded-lg" style={bgCSS}></div>
		</div>
	)
}

export default PreviewImage
