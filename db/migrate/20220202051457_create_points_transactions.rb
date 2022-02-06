class CreatePointsTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :points_transactions do |t|
      t.integer :points
      t.references :user, foreign_key: true
      t.references :report, foreign_key: true

      t.timestamps
    end
  end
end
