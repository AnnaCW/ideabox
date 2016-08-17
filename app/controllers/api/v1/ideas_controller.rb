class Api::V1::IdeasController < ApiBaseController
  respond_to :json

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    idea = Idea.find(params[:id])
    respond_with idea.update(update_params), location: nil
  end

  def destroy
    respond_with Idea.delete(params[:id]), nil
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end

  def update_params
    params.permit(:quality, :title, :body)
  end

end
