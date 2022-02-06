class BackfillPoints < ActiveRecord::Migration[5.2]
  def change
    reports = Report.all

    reports.each do |report|
      report.update!(points: report.points)
    end
  end
end
