var jshint = require('jshint').JSHINT;

///
exports.forEachTech = function(tech, entity, config) {
    if(tech.content === undefined) {
        return;
    }

    jshint(tech.content, config.getTechConfig(tech.name));

    jshint.data().errors && jshint.data().errors.forEach(function(error) {
        entity.addError({
            msg: error.reason.replace(/\.$/, ''),
            tech: tech.name,
            value: 'line ' + error.line + ', character ' + error.character
        });
    });
};
