# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_11_165543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "date_suggestions", force: :cascade do |t|
    t.string "title", null: false
    t.string "location", null: false
    t.string "date_type", null: false
    t.string "cost"
    t.string "date_number", null: false
    t.text "description", null: false
    t.integer "user_id"
    t.string "approximate_date_length"
    t.string "creator"
    t.string "creator_contact"
    t.string "address_location"
    t.index ["date_number"], name: "index_date_suggestions_on_date_number"
    t.index ["date_type"], name: "index_date_suggestions_on_date_type"
    t.index ["location"], name: "index_date_suggestions_on_location"
    t.index ["title"], name: "index_date_suggestions_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "email", null: false
    t.integer "date_id"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
