const fs = require('fs');

module.exports.dir = (root, path) => {

    const _preparedPath = _preparePath(path),
        fullPath = root + _preparedPath;

    try {
        return {
            files: fs.readdirSync(fullPath)
                .map(file => {
                    const stats = fs.lstatSync(fullPath + '/' + file);
                    return {
                        name: file,
                        isDirectory: stats.isDirectory(),
                        size: stats.size
                    };
                })
                .sort((a, b) => {
                    if (a.isDirectory === b.isDirectory) {
                        return a.name > b.name ? 1 : -1;
                    } else {
                        return a.isDirectory && !b.isDirectory ? -1 : 1;
                    }
                }),
            path: _preparedPath
        };
    } catch (e) {
        return {
            files: null,
            path: _preparedPath
        };
    }
};

const _preparePath = (path) => {
    if (path) {
        return '/' + path.split('/').filter(dir => dir && dir !== '..').join('/');
    } else {
        return '';
    }
};
