Rails.application.routes.draw do
  scope '/api' do
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]
    resources :reports
    delete :logout, to: "sessions#logout"
    get :logged_in, to: "sessions#logged_in"
    get :user_points, to: "reports#user_points"
    get :current_week_user_points, to: "reports#current_week_user_points"
    get :current_day_user_points, to: "reports#current_day_user_points"
    root to: "static#home"
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
