require "rails_helper"

feature "user edits quality" do
  scenario "user sees updated quality", js: true do
    create_list(:idea, 3)

    visit "/"

    within("tbody tr:first-child") do
      expect(page).to have_content("swill")

      click_on "Thumbs Up"

      expect(page).to_not have_content("swill")
      expect(page).to have_content("plausible")
    end
  end

  scenario "down-voting 'swill' idea yields no change", js: true do
    create(:idea)

    visit "/"

    within("tbody tr:first-child") do
      expect(page).to have_content("swill")

      click_on "Thumbs Down"

      expect(page).to have_content("swill")
      expect(page).to_not have_content("plausible")
      expect(page).to_not have_content("genius")
    end
  end

  scenario "up-voting 'genius' idea yields no change", js: true do
    create(:idea, quality: 2)

    visit "/"

    within("tbody tr:first-child") do
      expect(page).to have_content("genius")

      click_on "Thumbs Up"

      expect(page).to have_content("genius")
      expect(page).to_not have_content("swill")
      expect(page).to_not have_content("plausible")
    end
  end
end
