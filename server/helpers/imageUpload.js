const path = require('path');

/**
* File uploader function using express-fileupload to simplify upload process.
* set up to validate images in jpg, jpeg or png format with a file size below 3mb.

* @param {*} file takes in a file (req.files."name")
* @param {*} projectName is used to create a new name for the file.

* validate() uses @param {*} file and checks if file meets validation and checks:
* if file exists
* if file is an image (png, jpg, jpeg)
* if file size is less than 3mb

* dir() takes @param {*} projectName and replaces any special characters with "_"
* will then add "_image" to the end of the file name, and adds file extension creating "projectName_image.file_extension"
* returns directory path to use in upload() and the new file name

* upload() uses mv() function from express-fileupload to save file to server
* uses path returned from dir().path as the path it will be saved to 
*/

module.exports = imageUpload = (file, projectName) => {
	const validate = () => {
		const format = file.mimetype;
		const size = file.size;
		if (!file) {
			throw Error('Please select an image');
		} else if (format != 'image/png' && format != 'image/jpg' && format != 'image/jpeg') {
			throw Error('Please upload an image. PNG, JPG, and JPEG allowed');
		} else if (size > 3000000) {
			throw Error('Image size too large. ');
		}
	};

	const dir = () => {
		const fileName = projectName.replace(/[&\/\\#,+()$~%.'":*?<>/ /{}]/g, '_').toLowerCase();
		let fileExt = path.extname(file.name);
		let newFileName = `${fileName}_image${fileExt}`;
		const FILE_DIR = './public/images/';
		let filePath = `${FILE_DIR}${newFileName}`;

		console.log(filePath);
		return {
			name: newFileName,
			path: filePath
		};
	};

	const upload = () => {
		const path = dir().path;
		file.mv(path, (err) => {
			if (err) {
				throw Error('Something went wrong uploading the image');
			}
		});
	};

	return {
		validateFile: validate,
		fileName: dir().name,
		uploadFile: upload
	};
};

// module.exports = imageUpload;