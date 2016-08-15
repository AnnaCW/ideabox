class AddBodyToIdea < ActiveRecord::Migration[5.0]
  def change
    add_column :ideas, :body, :text
  end
end
