//=require ideas_helpers

describe('trimBody', function(){
  it('truncates string to 100 words', function () {
    var string = "string"
    var long_string = "Narwhal letterpress cold-pressed church-key, mumblecore poutine +1 squid vegan cray tilde. Plaid hella godard flexitarian mlkshk, quinoa PBR&B. Kickstarter ennui try-hard, keffiyeh cred pop-up ethical. Vinyl stumptown food truck, slow-carb cray pitchfork chartreuse twee. YOLO ennui brunch meditation fanny pack, skateboard vinyl selfies aesthetic occupy ugh mlkshk viral. Chillwave whatever hashtag +1 swag, pinterest put a bird on it fixie fashion axe dreamcatcher pop-up truffaut mumblecore. Post-ironic cardigan organic food truck, banjo brunch polaroid jean shorts. You probably haven't heard of them neutra cronut, keytar vegan tote bag biodiesel fashion axe bespoke fap mumblecore stumptown typewriter YOLO skateboard. Slow-carb next level cardigan sriracha, kickstarter semiotics ugh shabby chic offal keytar. Marfa asymmetrical cold-pressed, meditation slow-carb irony pour-over salvia. You probably haven't heard of them dreamcatcher small batch, knausgaard mustache chambray tilde VHS fingerstache. Offal intelligentsia single-origin coffee pork belly helvetica blue bottle, waistcoat kogi. Venmo craft beer artisan letterpress kinfolk neutra. Kogi helvetica fixie small batch master cleanse occupy, poutine meditation brunch tofu knausgaard thundercats."

    assert.equal(long_string.split(" ").length, 165);
    assert.equal((trimBody(long_string).split(" ")).length, 100);
  });
});
