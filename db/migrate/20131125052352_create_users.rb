class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false, default: 'test_user'
      t.integer :travel_count, default: 42
      t.datetime :last_seen_at

      t.timestamps
    end
  end
end
