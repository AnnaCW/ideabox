//=require ideas_helpers

describe('trimBody', function(){
  it('truncates string to 100 characters', function () {
    var long_string = "Biodiesel shoreditch quinoa selvage. Migas franzen chambray plaid, typewriter pabst kombucha meh yr bushwick. Kogi stumptown church-key small batch occupy. Literally church-key stumptown, deep v shabby chic typewriter thundercats pickled street art VHS."
    assert.equal(long_string.length, 253);
    expect(trimBody(long_string)).to.have.length.of.at.most(100);
  });

  it ('does not truncate string shorter than 100 characters', function () {
    var string = "string"
    assert.equal((trimBody(string)).length, 6);
  });

  it ('handles empty string', function () {
    var empty_string = ""
    assert.equal((trimBody(empty_string)).length, 0);
  });

  it ('rounds to nearest word', function () {
    var string = "Migas franzen chambray plaid, typewriter pabst beer" +
    "meh bushwick kogi stumptown craft brew awesome sauce."

    var string_trimmed_to_100 = "Migas franzen chambray plaid, typewriter pabst beer" +
    "meh bushwick kogi stumptown craft brew awesome sa"

    assert.equal(string.length, 104);
    assert.equal(string_trimmed_to_100.length, 100);

    assert.equal(trimBody(string), "Migas franzen chambray plaid, typewriter pabst beer" +
    "meh bushwick kogi stumptown craft brew awesome");
  });
});
