class Api::V1::IdeasController < ApiBaseController
  respond_to :json

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
