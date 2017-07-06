#! /usr/bin/env node

/*eslint-env node*/
var hacker = require('d2l-hacker');

function forEachCallback(nightmare, data) {
    return nightmare
        .goto('https://' + data.domain + '.brightspace.com/d2l/lms/dropbox/admin/folders_manage.d2l?ou=' + data.ou)
        .exists('[title="Turnitin OriginalityCheck enabled"]')
}

function finalCallback(courses) {
    var report = require('csv-to-table');

    courses = courses.map(function (course) {
        return {
            "name": course.elements.name,
            "ou": course.elements.ou,
            "hasTurnitin": course.result,
            "link": course.elements.link
        }
    });
    report.fromArray(courses, Object.keys(courses[0]), false, false, 'Has Turnitin')
}
hacker.run({}, forEachCallback, finalCallback);
