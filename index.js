var jshint = require('jshint').JSHINT;

///
exports.forEntityTech = function(tech, techConfig, entity) {
    jshint(tech.content, techConfig);

    jshint.data().errors && jshint.data().errors.forEach(function(error) {
        entity.addError({
            msg: error.reason.replace(/\.$/, ''),
            tech: tech.name,
            value: 'line ' + error.line + ', character ' + error.character
        });
    });
};
