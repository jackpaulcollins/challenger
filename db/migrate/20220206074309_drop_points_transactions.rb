class DropPointsTransactions < ActiveRecord::Migration[5.2]
  def change
    drop_table :points_transactions
  end
end
