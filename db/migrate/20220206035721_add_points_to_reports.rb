class AddPointsToReports < ActiveRecord::Migration[5.2]
  def change
    add_column :reports, :points, :integer
  end
end
