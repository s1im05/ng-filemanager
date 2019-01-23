const fs = require('fs');

module.exports.dir = (root, path) => {
    try {
        const fullPath = root + _preparePath(path);
        return fs.readdirSync(fullPath)
            .map(file => {
                const stats = fs.lstatSync(fullPath + '/' + file);
                return {
                    name: file,
                    isDirectory: stats.isDirectory()
                };
            });
    } catch (e) {
        console.error(e);
        return null;
    }
};

const _preparePath = (path) => {
    if (path) {
        return '/' + path.split('/').filter(dir => dir && dir !== '..').join('/');
    } else {
        return '';
    }
};
