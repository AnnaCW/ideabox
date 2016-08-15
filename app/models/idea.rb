class Idea < ApplicationRecord
  enum quality: [ :swill, :plausible, :genius]

  def formatted_created_at
    created_at.localtime.strftime("%m/%d/%Y %I:%M%p")
  end

  def formatted_updated_at
    updated_at.localtime.strftime("%m/%d/%Y %I:%M%p")
  end

  def truncated_body
    body.truncate_words(100)
  end
end
