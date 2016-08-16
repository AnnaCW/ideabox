class Api::V1::IdeasController < ApiBaseController
  
  def create
    render json: Idea.create(idea_params)
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end
