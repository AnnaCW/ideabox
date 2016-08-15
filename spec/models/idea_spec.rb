require 'rails_helper'

RSpec.describe Idea, type: :model do
  it "has correct attributes" do
    idea = create(:idea, title: "test idea", body: "great idea")

    expect(idea.title).to eq("test idea")
    expect(idea.body).to eq("great idea")
    expect(idea.quality).to eq("swill")
  end
end
