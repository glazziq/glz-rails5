Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'pages/:action', to: 'pages#:action', as: 'pages'
  root to: 'pages#home'
end
