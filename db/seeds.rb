class Seed
  def initialize
    create_ideas
  end

  def create_ideas
    Idea.create(title: "Veggie Truck", body: "vegan food, in a truck")
    Idea.create(title: "Photo Signature", body: "app that places small photo of the photographer in the corner of the photo", quality: 1)
  end
end

Seed.new
