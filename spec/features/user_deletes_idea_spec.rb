require "rails_helper"

feature "user deletes idea" do
  scenario "idea no longer appears on page", js: true do
    create_list(:idea, 3)

    visit "/"

    within("tbody tr:first-child") do
      expect(page).to have_content("Title3")

      click_on "Delete"

      expect(page).to_not have_content("Title3")
    end
  end
end
