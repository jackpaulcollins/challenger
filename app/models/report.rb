class Report < ApplicationRecord
  include PointsConcern
  belongs_to :user

  def total_points
  end
end
