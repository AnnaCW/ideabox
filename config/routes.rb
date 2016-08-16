Rails.application.routes.draw do
  root 'ideas#index'

  resources :ideas, only: [:index]

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :ideas, only: [:create]
    end
  end
end
