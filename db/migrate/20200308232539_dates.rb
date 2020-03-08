class Dates < ActiveRecord::Migration[5.2]
  def change
    create_table "dates", force: :cascade do |t|
      t.string "title", null: false
      t.string "location", null: false
      t.string "type", null: false
      t.integer "cost"
      t.string "date_number", null: false
      t.text "description", null: false
    end
      add_index :dates, :title
      add_index :dates, :type
      add_index :dates, :date_number
      add_index :dates, :location
  end
end
