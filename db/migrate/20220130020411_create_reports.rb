class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.string :rep_type
      t.integer :rep_count
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
