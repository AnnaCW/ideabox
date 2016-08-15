class Seed
  def initialize
    create_ideas
  end

  def create_ideas
    Idea.create(title: "Veggie Truck", body: "vegan food, in a truck")
    Idea.create(title: "Photo Signature", body: "app that places small photo of the photographer in the corner of the photo", quality: 1)
    Idea.create(title: "Long Idea",
                  body: "Pitchfork biodiesel dreamcatcher, DIY mumblecore jean shorts keytar poutine. Humblebrag fingerstache kickstarter 90's, narwhal blog squid roof party banh mi poutine tacos. Skateboard pork belly kombucha bitters master cleanse actually, pabst echo park quinoa selvage pug crucifix synth cornhole. Salvia vinyl listicle knausgaard offal, scenester echo park beard normcore authentic whatever chartreuse 8-bit VHS. Tacos put a bird on it semiotics ugh squid neutra fingerstache, kickstarter poutine truffaut mixtape flexitarian before they sold out viral. Seitan gentrify tousled, swag cardigan fingerstache mlkshk small batch leggings retro +1 kinfolk messenger bag waistcoat selvage. Salvia swag messenger bag, fixie franzen waistcoat cronut. Vinyl 90's pour-over paleo, tilde sustainable gluten-free. Mumblecore small batch yuccie bespoke, church-key blog meditation crucifix flexitarian listicle migas butcher XOXO brunch. Meditation microdosing flannel chia, pug normcore typewriter actually. Slow-carb mustache kickstarter williamsburg, lomo +1 direct trade tacos iPhone yr drinking vinegar pug neutra church-key. Migas 90's narwhal you probably haven't heard of them, gluten-free affogato distillery cliche food truck jean shorts humblebrag meggings. Thundercats intelligentsia mlkshk, gluten-free plaid iPhone brooklyn etsy keytar polaroid wolf fashion axe. Cronut pinterest chillwave, fashion axe hoodie heirloom semiotics gochujang meditation put a bird on it ramps sartorial cold-pressed bicycle rights austin.",
                  created_at: "2016-08-01 9:10:00")
  end
end

Seed.new
