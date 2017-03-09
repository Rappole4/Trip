class CreateUserJourneys < ActiveRecord::Migration[5.0]
  def change
    create_table :user_journeys do |t|
      t.integer :user_id
      t.integer :journey_id
      
      t.timestamps
    end
  end
end
