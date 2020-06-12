class AddColumnCreator < ActiveRecord::Migration[5.2]
  def change
    add_column :date_suggestions, :creator, :string
    add_column :date_suggestions, :creator_contact, :string
    add_column :date_suggestions, :address_location, :string
  end
end
