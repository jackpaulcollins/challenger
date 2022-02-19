class ApplicationController < ActionController::Base
  include CurrentUserConcern
  skip_before_action :verify_authenticity_token
  around_action :user_time_zone, if: :current_user
  before_action :set_current_user

  def current_user
    set_current_user
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end

  def user_time_zone(&block)
    Time.use_zone(current_user.time_zone, &block)
  end
end
