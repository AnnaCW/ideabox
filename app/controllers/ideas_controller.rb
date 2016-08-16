class IdeasController < ApplicationController
  respond_to :json, :html

  def index
    ideas = Idea.all.order(created_at: :desc)
    respond_with ideas
  end
end
