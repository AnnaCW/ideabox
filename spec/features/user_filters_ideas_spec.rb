require "rails_helper"

feature "user filters ideas" do
  scenario "user fills in search box", js: true do
    create(:idea, title: "My Best Idea")
    create(:idea, title: "My Worst Idea")
    create(:idea, title: "Mediocre Idea")

    visit "/"

    expect(page).to have_content("My Best Idea")
    expect(page).to have_content("My Worst Idea")
    expect(page).to have_content("Mediocre Idea")

    fill_in "search-box", with: "My"
  end
end
