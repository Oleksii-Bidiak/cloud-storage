const fs = require('fs')
const config = require('config')
const File = require('../models/File')

class FileServise {

	createDir(file) {
		const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
		return new Promise((resolve, reject) => {
			try {
				if (!fs.existsSync(filePath)) {
					fs.mkdirSync(filePath)
					return resolve({ message: 'File was created' })
				} else {
					return resorejectlve({ message: 'File already exist' })
				}
			} catch (e) {
				return reject({ message: 'File error', e })
			}
		})
	}

}

module.exports = new FileServise()