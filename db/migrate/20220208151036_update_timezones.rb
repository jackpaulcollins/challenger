class UpdateTimezones < ActiveRecord::Migration[5.2]
  def change
    user = User.find(5)
    user.update!(time_zone: "Pacific Time (US & Canada)")
  end
end
