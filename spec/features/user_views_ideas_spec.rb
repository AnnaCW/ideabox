require "rails_helper"

feature "user views ideas" do
  scenario "user sees all ideas and attributes", js: true do
    idea_1 = create(:idea, title: "Idea 1 Title",
                           body: "Idea 1 Body",
                           created_at: "2016-08-01 09:10:00"
    )

    idea_2 = create(:idea, title: "Idea 2 Title",
                           body: "Idea 2 Body",
                           created_at: "2016-08-15 07:00:00"
    )

    visit "/"

    within("tbody tr:first-child") do
      expect(page).to have_content("Idea 2 Title")
      expect(page).to have_content("Idea 2 Body")
      expect(page).to have_content("swill")
    end

    within("tbody tr:last-child") do
      expect(page).to have_content("Idea 1 Title")
      expect(page).to have_content("Idea 1 Body")
      expect(page).to have_content("swill")
    end
  end
end
