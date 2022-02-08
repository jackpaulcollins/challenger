class BackfillChrisReports < ActiveRecord::Migration[5.2]
  def change
    chris = User.find(23)

    #2022-02-01
    r_one = Report.create!(
      user_id: chris.id,
      rep_type: "push_up",
      rep_count: 100,
      created_at: Time.new(2022, 02, 01)
    )

    r_one.update!(points: r_one.points)

    r_two = Report.create!(
      user_id: chris.id,
      rep_type: "air_squat",
      rep_count: 100,
      created_at: Time.new(2022, 02, 01)
    )

    r_two.update!(points: r_two.points)

    #2022-02-02
    r_three = Report.create!(
      user_id: chris.id,
      rep_type: "push_up",
      rep_count: 100,
      created_at: Time.new(2022, 02, 02)
    )

    r_three.update!(points: r_three.points)

    r_four = Report.create!(
      user_id: chris.id,
      rep_type: "air_squat",
      rep_count: 100,
      created_at: Time.new(2022, 02, 02)
    )

    r_four.update!(points: r_four.points)

    #2022-02-03

    r_five = Report.create!(
      user_id: chris.id,
      rep_type: "push_up",
      rep_count: 100,
      created_at: Time.new(2022, 02, 03)
    )

    r_five.update!(points: r_five.points)

    r_six = Report.create!(
      user_id: chris.id,
      rep_type: "air_squat",
      rep_count: 100,
      created_at: Time.new(2022, 02, 03)
    )

    r_six.update!(points: r_six.points)

    #2022-02-04

    r_seven = Report.create!(
      user_id: chris.id,
      rep_type: "push_up",
      rep_count: 100,
      created_at: Time.new(2022, 02, 04)
    )

    r_seven.update!(points: r_seven.points)

    r_eight = Report.create!(
      user_id: chris.id,
      rep_type: "air_squat",
      rep_count: 100,
      created_at: Time.new(2022, 02, 04)
    )

    r_eight.update!(points: r_eight.points)

    #2022-02-05

    r_nine = Report.create!(
      user_id: chris.id,
      rep_type: "push_up",
      rep_count: 100,
      created_at: Time.new(2022, 02, 05)
    )

    r_nine.update!(points: r_nine.points)

    r_ten = Report.create!(
      user_id: chris.id,
      rep_type: "air_squat",
      rep_count: 100,
      created_at: Time.new(2022, 02, 05)
    )

    r_ten.update!(points: r_ten.points)

    #2022-02-06

    r_eleven = Report.create!(
      user_id: chris.id,
      rep_type: "push_up",
      rep_count: 100,
      created_at: Time.new(2022, 02, 06)
    )

    r_eleven.update!(points: r_eleven.points)

    r_twelve = Report.create!(
      user_id: chris.id,
      rep_type: "air_squat",
      rep_count: 100,
      created_at: Time.new(2022, 02, 06)
    )

    r_twelve.update!(points: r_twelve.points)
    
  end
end
