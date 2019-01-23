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
            })
            .sort((a, b) => {
                if (a.isDirectory === b.isDirectory) {
                    return a.name > b.name ? 1 : -1;
                } else {
                    return a.isDirectory && !b.isDirectory ? -1 : 1;
                }
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
