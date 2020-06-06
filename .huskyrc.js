'use strict';

const tasks = (...arr) => arr.reduce((acc, o) => [...acc, ...(Array.isArray(o) ? o : [o])], []).join(' && ');

module.exports = {
    hooks: {
        'pre-commit': tasks([
            `npm run build`,
            `git add $(find docs)`
        ]),
    }
};