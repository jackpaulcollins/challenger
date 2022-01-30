Rails.application.routes.draw do
  scope '/api' do
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]
    resources :reports
    delete :logout, to: "sessions#logout"
    get :logged_in, to: "sessions#logged_in"
    get :user_points, to: "reports#user_points"
    root to: "static#home"
  end
end
