const path = require('path');
const fs = require('fs');
const fileHelper = {};

//file uploader helper function using express-fileupload to simplify upload process

/** 
 * @func upload()
 * @param projectName is used to create a new file name on the server
 * @param file takes a req.file.name to upload.
 * returns a upload function, and the file name for saving to a db.
 * @func validateFile() uses @param file param and checks that the file meets
 * the conditional requirements. If not, it will throw an Error. 
 * checks if file exists
 * checks if file size exceeds @const maxFileSize 
 * checks if file format matches @const formats
 * @func uploadFile() runs the validateFile func then uses express-fileupload 
 * and uploads the file to the path created by @const filePath using the @func file.mv()
 */

/**
 * @func rename()
 * @param newName is used to create a new file name for renaming the file
 * @param oldName is the previous file name. takes it's extension/file format
 * to parse into the new file name.
 * returns a function to rename the file, and a new file name to use for saving to a db.
 * 
*/

const FILE_DIR = './public/images/';

fileHelper.upload = (projectName, file) => {
	//create a new file name and path
	const formatFileName = projectName.replace(/[&\/\\#,+()$~%.'":*?<>/ /{}]/g, '_').toLowerCase();
	const fileExt = path.extname(file.name);
	const newFileName = `${formatFileName}_image${fileExt}`;
	const filePath = `${FILE_DIR}${newFileName}`;

	validateFile = () => {
		const currentFormat = file.mimetype;
		const size = file.size;
		const maxFileSize = 3000000;
		const formats = [ 'image/png', 'image/jpeg', 'image/jpg' ];

		if (!file) {
			throw Error('Please select an image');
		} else if (formats.every((format) => format != currentFormat)) {
			throw Error('Please choose the corrent format.');
		} else if (size > maxFileSize) {
			throw Error('Image size too large. ');
		}
	};

	const uploadFile = () => {
		validateFile();

		file.mv(filePath, (err) => {
			if (err) {
				console.log(err);
				throw Error('Something went wrong uploading the image');
			}
		});
	};

	return {
		fileName: newFileName,
		uploadFile: uploadFile
	};
};

fileHelper.rename = (newName, oldName) => {
	const fileExt = path.extname(oldName);
	const formatFileName = newName.replace(/[&\/\\#,+()$~%.'":*?<>/ /{}]/g, '_').toLowerCase();
	const newFileName = `${formatFileName}_image${fileExt}`;
	const oldFilePath = `${FILE_DIR}${oldName}`;
	let newFilePath = `${FILE_DIR}${newFileName}`;

	const renameFile = () => {
		fs.rename(oldFilePath, newFilePath, (err) => {
			if (err) throw Error('Error with the image name');
		});
	};

	return {
		newFileName: newFileName,
		renameFile: renameFile
	};
};

module.exports = fileHelper;
