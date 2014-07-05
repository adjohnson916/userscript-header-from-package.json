var lab = require('lab'),
    exec = require('child_process').exec,
    fs = require('fs');

lab.test('output should be as expected', function(done) {
    exec('../index.js', function(err, stdout) {
        if (err) return done(err);
        var fixture = fs.readFileSync('fixture/output.js', 'utf8');
        lab.expect(stdout).equals(fixture);
        done();
    });

});
