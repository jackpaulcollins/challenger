class Report < ApplicationRecord
  include PointsConcern
  belongs_to :user
  has_one :report_transaction
end
