class ReportsController < ApplicationController
  
  def index
    reports = Report.
              all.
              includes(:user).
              as_json(include: { user: { only: [:first_name, :last_name] } })

    render json: {
      reports: reports
    }
  end

  def show
    report = Report.find(params["id"])
    user = User.find(report.user_id)
    render json: { report: report,
                    user: user } 
  end

  def create
    report = Report.create!(
      user_id: params["report"]["user_id"],
      rep_type: params["report"]["rep_type"],
      rep_count: params["report"]["rep_count"]
    )

    if report
      render json: { 
        status: :created,
        report: report
      }
    else
      render json: { status: 500 }
    end
  end

  def update
    report = Report.find(params["id"])
      report.update!(
        rep_type: params["rep_type"],
        rep_count: params["rep_count"]
      )
    render json: { report: report }
  end

  def destroy
    report = Report.find(params["id"])
    report.destroy!
    render json: { message: "report deleted"}
  end

  def user_points
    hash = {}
    users = User.all
    users.each do |user|
      hash[user.first_name] = User.find(user.id).reports.sum(&:points)
    end
    render json: { data: hash }
  end
end
