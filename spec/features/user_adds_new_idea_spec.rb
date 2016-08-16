require "rails_helper"

feature "user adds new idea" do
  scenario "on save, sees new idea in list of all ideas" do

    visit "/"

    within(".add-new-idea") do
      fill_in "title", with: "new idea"
      fill_in "body", with: "this is the body"
      click_on("Save")
    end

  end
end
