class ReportsController < ApplicationController
  include PointsConcern
  
  def index
    reports = Report.
              all.
              order("created_at DESC").
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
    @report = Report.create!(
      user_id: params["report"]["user_id"],
      rep_type: params["report"]["rep_type"],
      rep_count: params["report"]["rep_count"],
      created_at: Time.now.utc
    )

    if @report
      #calculate and set the points
      @report.update!(points: @report.points)

      render json: { 
        status: :created,
        report: @report
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
    User.find_each.each do |u|
      user_points = Report.select("points").where("user_id = ?", u.id).sum("points")
      hash.merge!(
        u.first_name + " " + u.last_name => user_points
      )
    end
    arr = hash.sort
    render json: { data: arr}
  end

  def current_week_user_points
    hash = {}
    User.find_each.each do |u|
      d = Time.now.utc.in_time_zone(u.time_zone)
      bow = d.at_beginning_of_week
      eow = d.at_end_of_week
      user_points = Report.select("points").where("user_id = ?", u.id).where("created_at BETWEEN ? and ?", bow, eow).sum("points")
      hash.merge!(
        u.first_name + " " + u.last_name => user_points
      )
    end
    arr = hash.sort
    render json: { data: arr}
  end

  def current_day_user_points

    hash = {}
    User.find_each.each do |u|
      d = Time.now.utc.in_time_zone(u.time_zone)
      bod = d.at_beginning_of_day
      eod = d.at_end_of_day
      user_points = Report.select("points").where("user_id = ?", u.id).where("created_at BETWEEN ? AND ?", bod, eod).sum("points")
      hash.merge!(
        u.first_name + " " + u.last_name => user_points
      )
    end
    arr = hash.sort
    render json: { data: arr}
  end
end