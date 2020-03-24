class CreateDateSuggestions < ActiveRecord::Migration[5.2]
  def change
    create_table :date_suggestions do |t|
      t.string "title", null: false
      t.string "location", null: false
      t.string "date_type", null: false
      t.integer "cost"
      t.integer "date_number", null: false
      t.text "description", null: false
    end
      add_index :date_suggestions, :title
      add_index :date_suggestions, :date_type
      add_index :date_suggestions, :date_number
      add_index :date_suggestions, :location

      create_table "users", force: :cascade do |t|
      t.string "username", null: false
      t.string "session_token", null: false
      t.string "password_digest", null: false
      t.string "email", null: false
    end
      add_index :users, :username
      add_index :users, :session_token
  end
end
