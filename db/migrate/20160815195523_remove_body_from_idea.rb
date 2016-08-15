class RemoveBodyFromIdea < ActiveRecord::Migration[5.0]
  def change
    remove_column :ideas, :body, :string
  end
end
