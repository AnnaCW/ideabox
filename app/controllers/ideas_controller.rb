class IdeasController < ApplicationController
  respond_to :json, :html

  def index
    ideas = Idea.all.order(created_at: :desc)
    respond_with ideas
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      respond_with idea
    else
      respond_with status: 422
    end
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
