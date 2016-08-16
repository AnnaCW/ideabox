require "rails_helper"

feature "user adds new idea" do
  scenario "on save, sees new idea in list of all ideas", js: true do

    visit "/"

    within(".add-new-idea") do
      fill_in "titleTextarea", with: "new title"
      fill_in "bodyTextarea", with: "new body"
      click_on "Save"
    end

    within(".ideas-listing") do
      expect(page).to have_content("new title")
      expect(page).to have_content("new body")
    end
  end
end
