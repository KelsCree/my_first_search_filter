Rails.application.routes.draw do
  resources :dogs, only: [:index, :show]
end
