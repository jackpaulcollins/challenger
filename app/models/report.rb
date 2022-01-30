class Report < ApplicationRecord
  include PointsConcern
  belongs_to :user
end
